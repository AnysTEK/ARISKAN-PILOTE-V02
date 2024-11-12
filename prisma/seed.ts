import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'anys.tekaya@ariskan.fr' },
    update: {},
    create: {
      email: 'anys.tekaya@ariskan.fr',
      name: 'Anys Tekaya',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Seed BDD_GED
  await prisma.bDD_GED.create({
    data: {
      filename: 'procedure-qualite-v1.pdf',
      hash: '0x1234567890abcdef',
      contentType: 'application/pdf',
      size: 1024000,
      uploadedBy: admin.id,
      blockchainTx: '0xabcdef1234567890',
      metadata: JSON.stringify({
        department: 'Quality',
        tags: ['procedure', 'quality', 'ISO9001']
      }),
      status: 'ACTIVE'
    }
  })

  // Seed RoleResponsibility
  await prisma.roleResponsibility.create({
    data: {
      title: 'Quality Manager',
      description: 'Responsible for quality management system',
      userId: admin.id,
      department: 'Quality',
      level: 'Manager',
      startDate: new Date(),
      status: 'ACTIVE'
    }
  })

  // Seed ProcessActivity
  await prisma.processActivity.create({
    data: {
      name: 'Quality Control Process',
      description: 'Main quality control process',
      type: 'Core',
      owner: admin.id,
      kpis: JSON.stringify(['defect_rate', 'customer_satisfaction']),
      inputs: JSON.stringify(['raw_materials', 'specifications']),
      outputs: JSON.stringify(['quality_report', 'approved_products']),
      resources: JSON.stringify(['quality_team', 'testing_equipment']),
      status: 'ACTIVE'
    }
  })

  // Seed PolicyEngagement
  await prisma.policyEngagement.create({
    data: {
      title: 'Quality Policy 2024',
      content: 'Our commitment to quality...',
      type: 'Quality',
      version: '1.0',
      approvedBy: admin.id,
      approvalDate: new Date(),
      reviewDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      status: 'ACTIVE'
    }
  })

  // Seed RiskManagement
  await prisma.riskManagement.create({
    data: {
      name: 'Production Delay Risk',
      description: 'Risk of delays in production schedule',
      category: 'Operational',
      probability: 0.3,
      impact: 0.7,
      riskLevel: 'HIGH',
      mitigations: JSON.stringify(['backup_suppliers', 'buffer_stock']),
      owner: admin.id,
      reviewDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      status: 'ACTIVE'
    }
  })

  // Seed EnvironmentalAnalysis
  await prisma.environmentalAnalysis.create({
    data: {
      aspect: 'Energy Consumption',
      impact: 'Carbon Emissions',
      severity: 'MEDIUM',
      frequency: 'CONTINUOUS',
      controls: JSON.stringify(['energy_monitoring', 'efficiency_programs']),
      compliance: true,
      responsible: admin.id,
      status: 'ACTIVE'
    }
  })

  // Seed DUERP
  await prisma.dUERP.create({
    data: {
      workUnit: 'Production Line A',
      hazard: 'Moving Machinery Parts',
      riskLevel: 'HIGH',
      existingMeasures: 'Safety guards, Emergency stops',
      plannedMeasures: 'Additional operator training',
      responsible: admin.id,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      status: 'IN_PROGRESS'
    }
  })

  // Seed Asset
  await prisma.asset.create({
    data: {
      name: 'Production Line Robot',
      type: 'Equipment',
      location: 'Factory Floor A',
      status: 'OPERATIONAL',
      purchaseDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
      value: 150000.00,
      depreciation: 15000.00,
      maintenanceSchedule: 'QUARTERLY',
      lastMaintenance: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      nextMaintenance: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      documents: JSON.stringify(['manual_id_1', 'warranty_id_1'])
    }
  })

  // Seed ChemicalRisk
  await prisma.chemicalRisk.create({
    data: {
      substance: 'Acetone',
      casNumber: '67-64-1',
      hazardClass: 'Flammable Liquid Category 2',
      pictograms: JSON.stringify(['GHS02', 'GHS07']),
      storageLocation: 'Chemical Storage Room A',
      maxQuantity: 100.0,
      unit: 'L',
      msdsLink: 'https://msds.example.com/acetone',
      controlMeasures: 'Ventilation, PPE, Grounding',
      emergencyProcedure: 'Evacuate area, Call emergency response team',
      responsible: admin.id,
      status: 'ACTIVE'
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })