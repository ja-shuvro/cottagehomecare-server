# Project Memory & Execution State

## 1. Project Context & Objectives
- **Application**: Secure Note-Taking Application (Technical Interview Task)
- **Primary Goal**: Deliver a production-grade REST API and accompanying functional frontend demonstrating secure JWT authentication, RBAC, minimal & efficient indexing, and MongoDB aggregation pipelines.
- **Key Constraints**:
  - Visible indexes using `schema.index()`.
  - Zero unnecessary indexes.
  - No templates for frontend.
  - Single `aggregate()` call for Interest grouping.
  - Single pipeline with `$lookup` for User posts.

---

## 2. Current Status
- **Current Phase**: Phase 0 Complete (Pre-build Documentation and Specifications)
- **Next Phase**: Phase 1 (Project Foundation & Environment Setup)
- **Last Updated**: Initial project setup

---

## 3. Architecture & Design Decisions Log

| Decision ID | Decision | Rationale | Alternatives Considered |
| :--- | :--- | :--- | :--- |
| **ADR-001** | Use Node.js + Express with TypeScript for backend | Enforces strict compile-time types for DTOs and API payloads; clean and standard for technical interview review. | Plain JavaScript (less type-safe), NestJS (heavier boilerplate). |
| **ADR-002** | Minimal Compound Index `{ user: 1, createdAt: -1 }` on Note model | Satisfies both equality search by `user` and chronological pagination sorting without memory sort. Prefix rule eliminates the need for separate `{ user: 1 }` index. | Separate `{ user: 1 }` and `{ createdAt: -1 }` (redundant, wastes RAM and write performance). |
| **ADR-003** | Multikey Index `{ interests: 1 }` on User model | Supports efficient indexing for array elements in Scenario 1 aggregation pipeline. | Unindexed array (triggers full collection scan during `$unwind`). |
| **ADR-004** | Bespoke Vanilla CSS Design Tokens for Frontend | Fully compliant with "NO TEMPLATES" interview constraint while ensuring high aesthetic quality and zero library bloat. | Tailwind (requires configuration and user confirmation), Pre-built component libraries (violates no-template rule). |

---

## 4. Work in Progress / Checklist
- [x] Analyze `Backend Interview Task.pdf` requirements and critical constraints.
- [x] Create comprehensive `docs/PRD.md`.
- [x] Create detailed `docs/Architecture.md`.
- [x] Create custom `docs/Design.md`.
- [x] Create engineering standards `docs/Rules.md`.
- [x] Create execution roadmap `docs/Phases.md`.
- [x] Initialize `docs/Memory.md`.
- [ ] Initialize `/server` environment and TypeScript setup.
- [ ] Initialize `/client` environment and Vite setup.
- [ ] Implement Mongoose models with explicit `schema.index()`.
- [ ] Implement JWT auth and bcrypt hashing.
- [ ] Implement RBAC Notes REST API with pagination.
- [ ] Implement Scenario 1 & 2 MongoDB Aggregation pipelines.
- [ ] Implement Admin user management.
- [ ] Build clean frontend with auth, dashboard, admin, and aggregation views.
- [ ] Audit indexes and query performance (`executionStats`).

---

## 5. Change & Session History
- **Initial Setup**: Created complete documentation suite in `/docs` adhering to user request before commencing code implementation.
