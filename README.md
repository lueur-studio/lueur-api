# Lueur API

Photo-sharing platform for events with end-to-end encryption.

## 📁 Repository Structure

This repository contains two versions of the Lueur API:

### `/legacy` - Express.js Backend (v1.0)
- **Stack**: Node.js, Express.js, Sequelize, MySQL
- **Status**: Deprecated, kept for reference
- Original implementation with basic photo storage on S3

### `/new` - NestJS TypeScript Backend (v2.0) 🚀
- **Stack**: NestJS, TypeScript, TypeORM, MySQL
- **Status**: Active development
- Features:
  - Modern TypeScript architecture
  - End-to-end photo encryption (AES-256-GCM)
  - Enhanced security with AWS KMS
  - Comprehensive API documentation (Swagger)
  - Type-safe database queries
  - JWT authentication with refresh tokens

## 🚀 Getting Started (New Backend)

### Prerequisites
- Node.js 18+
- MySQL 8.0+
- AWS Account (S3 + KMS)

### Installation

```bash
cd new
npm install
cp .env.example .env
# Configure your .env file
npm run start:dev
```

### API Documentation
Once running, visit: `http://localhost:3000/api/docs`

## 🔐 Security Features (v2.0)

- **Photo Encryption**: All photos encrypted with AES-256-GCM before upload
- **Key Management**: AWS KMS for secure key storage and rotation
- **Authentication**: JWT with refresh token rotation
- **Validation**: Comprehensive input validation with class-validator
- **Access Control**: Event-based permission system (Admin/Contributor/Viewer)

## 📋 Migration Status

- [x] Setup NestJS Project Foundation
- [ ] Configure Database & TypeORM
- [ ] Implement Encryption Service
- [ ] Migrate Auth Module
- [ ] Migrate User Module
- [ ] Migrate Event Module
- [ ] Migrate Photo Module with Encryption
- [ ] Setup S3 with Encryption
- [ ] Global Exception Filters
- [ ] API Documentation
- [ ] Docker Configuration
- [ ] Testing Suite
- [ ] Data Migration Script

## 📝 License

ISC
