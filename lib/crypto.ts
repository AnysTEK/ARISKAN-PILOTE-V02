import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || randomBytes(32).toString('hex');
const ALGORITHM = 'aes-256-gcm';

export class Crypto {
  private static generateKey(secret: string, salt: Buffer): Buffer {
    return scryptSync(secret, salt, 32);
  }

  static encrypt(text: string): { encryptedData: string; iv: string; tag: string; salt: string } {
    const salt = randomBytes(16);
    const iv = randomBytes(12);
    const key = this.generateKey(ENCRYPTION_KEY, salt);
    
    const cipher = createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return {
      encryptedData: encrypted,
      iv: iv.toString('hex'),
      tag: cipher.getAuthTag().toString('hex'),
      salt: salt.toString('hex')
    };
  }

  static decrypt(encrypted: string, iv: string, tag: string, salt: string): string {
    const key = this.generateKey(ENCRYPTION_KEY, Buffer.from(salt, 'hex'));
    const decipher = createDecipheriv(
      ALGORITHM,
      key,
      Buffer.from(iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(tag, 'hex'));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}