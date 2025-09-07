# School Attendance & Notification App

## Overview
A mobile-first app for schools to manage attendance, notifications, and schedules. Built for students, lecturers, and admins.

## Tech Stack
- Mobile: React Native (iOS/Android)
- Backend: Node.js (Express.js)
- Database: MySQL (data) + Firebase (notifications)
- Auth: JWT with role-based access
- Hosting: AWS/DigitalOcean (dev: XAMPP)

## User Roles
- **Admin**: Manage accounts, schedules, notifications, reports.
- **Lecturer**: Mark attendance, approve permissions, send class announcements.
- **Student**: View attendance, submit permissions, receive notifications.

## Core Features
- **Auth**: Role-based login, JWT, HTTPS.
- **Attendance**: Mark A (Absent), P (Permission), L (Late). Optional QR check-in.
- **Notifications**: Push via Firebase for announcements, alerts.
- **Permissions**: Students submit requests; lecturers approve/reject.
- **Reports**: Attendance stats, export as PDF/Excel.
- **Mobile**: Dark/light mode, offline sync, biometric login.

## Additional Features (Future)
- Parent role for monitoring.
- Calendar sync for schedules.
- Attendance analytics with charts.
- Multi-language support.

## Folder Structure
- /backend: Node.js server
- /mobile: React Native app