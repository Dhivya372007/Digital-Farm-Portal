# AgriSafe
## Software Architecture & Product Specification
### Part 1 — Vision, Architecture, Design System & UX Foundation

Version: 1.0

Project Type: Frontend-First Hackathon MVP

Target Build Time: 24 Hours

Primary Goal: Demonstrate MRL Compliance Monitoring & Withdrawal Management in Livestock

Frontend Stack: React + Vite + Tailwind CSS

Design Style: Apple × Linear × Modern SaaS

---

# 1. Executive Summary

AgriSafe is a digital farm management platform designed to help livestock farmers, veterinarians, and regulatory authorities monitor antimicrobial usage (AMU) and ensure compliance with Maximum Residue Limit (MRL) regulations.

The platform prevents livestock products from entering the market before mandatory drug withdrawal periods have been completed.

The MVP focuses on solving one critical workflow:

1. Animal receives medication.
2. Withdrawal period is automatically calculated.
3. Animal enters withdrawal state.
4. Farmer attempts sale.
5. System blocks non-compliant sale.
6. Animal becomes safe after withdrawal completion.
7. Compliance status updates.

The purpose of this hackathon prototype is not to build a production-ready farm management system.

The purpose is to visually demonstrate:

- MRL awareness
- Withdrawal tracking
- Compliance monitoring
- Antimicrobial usage tracking
- Prevention of unsafe livestock sales

through a polished, modern, interactive prototype.

---

# 2. Problem Statement

Livestock farmers frequently administer antibiotics and other veterinary drugs to animals.

Many medications require a withdrawal period before products such as:

- Milk
- Meat
- Eggs

can safely enter the food supply chain.

Failure to respect withdrawal periods may lead to:

- MRL violations
- Unsafe food products
- Regulatory penalties
- Consumer health risks
- Increased antimicrobial resistance

Most small and medium farms currently track this information manually.

AgriSafe digitizes this process.

---

# 3. Product Vision

## Vision Statement

Enable every livestock farmer to instantly know whether an animal is safe for sale and prevent accidental MRL violations before they occur.

---

## Long-Term Vision

AgriSafe should evolve into a complete livestock compliance ecosystem containing:

- Drug administration tracking
- Withdrawal monitoring
- Veterinary collaboration
- Compliance reporting
- MRL auditing
- Government oversight dashboards
- Farm-level analytics

The hackathon MVP represents the first step toward that vision.

---

# 4. Core MVP Goal

The entire application should revolve around a single powerful demo moment:

## The Money Shot

Farmer attempts to sell an animal before withdrawal period completion.

↓

System detects violation.

↓

Sale is blocked.

↓

Alert appears.

↓

Dashboard updates.

↓

User clearly understands why the sale was prevented.

This interaction is the most important feature in the entire application.

Every design decision should support this moment.

---

# 5. Demo Narrative

The UI should be designed around the following demo script.

---

## Step 1

Login as Farmer

Duration: 15 seconds

User enters any credentials.

Clicks:

```text
Continue as Farmer
```

System enters Farmer Dashboard.

No real authentication.

---

## Step 2

Register or Select Animal

Duration: 20 seconds

User views existing livestock.

Example:

```text
Cow A-014
```

User opens Animal Profile.

---

## Step 3

Administer Drug

Duration: 30 seconds

User navigates to:

```text
Drugs
→ Drug Administration
```

Selects:

```text
Animal
Drug
Date
Dose
```

Clicks:

```text
Save Administration
```

System automatically calculates:

```text
Withdrawal Period

7 Days
```

Animal status updates.

---

## Step 4

Withdrawal Begins

Duration: 20 seconds

Dashboard now shows:

```text
Under Withdrawal
```

Status badge changes.

Animal card updates.

---

## Step 5

Attempt Sale

Duration: 45 seconds

User clicks:

```text
Attempt Sale
```

inside Animal Profile.

Confirmation modal appears.

User confirms.

System validates withdrawal status.

Sale is blocked.

---

## Step 6

Alert Appears

Duration: 20 seconds

Red alert banner appears.

Example:

```text
Sale Blocked

Cow A-014 still has
3 withdrawal days remaining.
```

Toast notification appears.

Dashboard updates.

Violation count increments.

---

## Step 7

Withdrawal Complete

Duration: 20 seconds

Use seeded data or demo mode.

Animal status becomes:

```text
Safe To Sell
```

Badge turns green.

Sale succeeds.

---

## Step 8

Impact Slide

Duration: 15 seconds

Transition to PPT.

Discuss:

- Farmer Benefits
- Government Benefits
- Consumer Benefits

End Demo.

---

# 6. Product Scope

## Included In MVP

### Farmer

- Login
- Dashboard
- Animal Management
- Drug Database
- Drug Administration
- Withdrawal Monitoring
- Sale Validation
- Consultation Request

### Vet

- Login
- Dashboard
- Appointment View
- Animal View
- Drug View

### Admin

- Static Dashboard

---

## Simplified Features

### Authentication

Fake authentication.

No JWT.

No Supabase Auth.

Role selected via button.

---

### SMS Alerts

Simulated.

Show toast:

```text
SMS sent to farmer
```

No Twilio integration.

---

### Consultation

Static booking flow.

No video calling.

---

### Certificates

Optional.

Generate only if time permits.

---

## Excluded From MVP

- Real payments
- Video calls
- Real SMS
- Real email
- Government integrations
- Multi-language support
- Real analytics
- Complex RBAC
- Audit logs
- Live notifications

---

# 7. Design Philosophy

The application should feel like a modern SaaS platform.

Not:

❌ Government portal

❌ Hospital management system

❌ ERP software

❌ Bootstrap dashboard

---

Instead:

✅ Linear

✅ Stripe Dashboard

✅ Notion

✅ Vercel

✅ Apple Human Interface Design

---

# 8. UX Principles

## Principle 1

Clarity Above Everything

The user should understand:

```text
Can I sell this animal?
```

within 3 seconds.

---

## Principle 2

Status Must Be Visible

Every animal must clearly show:

```text
Safe
```

or

```text
Under Withdrawal
```

or

```text
Violation
```

without opening details.

---

## Principle 3

Warnings Are Event-Driven

Red warning banners should NOT exist by default.

Warnings only appear when:

- Sale blocked
- Violation occurs

This makes alerts meaningful.

---

## Principle 4

Actions Must Feel Immediate

Every action should provide feedback.

Examples:

```text
Animal Added
Drug Saved
Withdrawal Calculated
Sale Blocked
Consultation Booked
```

using toast notifications.

---

## Principle 5

Minimal Clicks

Core workflow should require:

Maximum 3 clicks.

Example:

```text
Animal
→ Administer Drug
→ Save
```

Done.

---

## Principle 6

Consistent Layout

Every page should use:

- Same spacing
- Same card styles
- Same header
- Same sidebar

No page should feel like a separate application.

---

# 9. Design Language

## Visual Identity

Keywords:

```text
Clean
Professional
Trustworthy
Modern
Calm
Agricultural Technology
```

---

## Avoid

```text
Bright Gradients
Neon Colors
Heavy Shadows
Rounded Pills Everywhere
Glassmorphism
Material UI Appearance
```

---

## Preferred

```text
Subtle Borders
Soft Backgrounds
Large Radius
Muted Colors
Generous White Space
```

---

# 10. Color System

## Background

```css
#F7F7F5
```

---

## Card Surface

```css
#FFFFFF
```

---

## Primary

```css
#2563EB
```

---

## Success

```css
#16A34A
```

Used for:

- Safe To Sell
- Success States

---

## Warning

```css
#D97706
```

Used for:

- Withdrawal In Progress

---

## Danger

```css
#DC2626
```

Used for:

- Sale Blocked
- Violations

---

## Border

```css
#E5E7EB
```

---

## Text Primary

```css
#111827
```

---

## Text Secondary

```css
#6B7280
```

---

# 11. Typography

Font Family

```text
Inter
```

Weights

```text
400
500
600
700
```

---

Rules

Page Title

```text
32px
600
```

Section Title

```text
20px
600
```

Body

```text
14-16px
```

Labels

```text
12-14px
```

---

# 12. Motion System

Animations should be subtle.

Never flashy.

---

Card Hover

```text
150ms
```

---

Button Hover

```text
150ms
```

---

Toast

```text
Slide Down
200ms
```

---

Modal

```text
Fade + Scale
200ms
```

---

Page Transition

```text
Fade
150ms
```

---

# 13. Tech Stack

Frontend

```text
React
```

---

Bundler

```text
Vite
```

---

Styling

```text
Tailwind CSS
```

---

Icons

```text
Lucide React
```

---

Routing

```text
React Router DOM
```

---

State

```text
React Context
```

---

Storage

```text
Local Storage
```

---

API Layer

```text
Mock Service Layer
```

Backend-ready.

---

# 14. Overall Frontend Architecture

```text
Presentation Layer
        ↓
Pages
        ↓
Reusable Components
        ↓
Context Layer
        ↓
Service Layer
        ↓
Local Storage
```

Future:

```text
Presentation Layer
        ↓
Pages
        ↓
Reusable Components
        ↓
Context Layer
        ↓
Service Layer
        ↓
Express API
        ↓
Supabase
```

UI should never directly access localStorage.

Only services may access storage.

---

# 15. Folder Responsibilities

## components/

Reusable UI only.

No business logic.

---

## pages/

Route-level screens.

Compose components.

---

## services/

Data access layer.

Future backend integration lives here.

---

## context/

Global application state.

Authentication.

Notifications.

Shared data.

---

## hooks/

Reusable behavior.

Example:

```text
useAuth
useToast
useAnimals
```

---

## utils/

Pure functions.

No UI.

No API calls.

Examples:

```text
calculateWithdrawal()
formatDate()
validators()
```

---

## routes/

Routing configuration.

Protected routes.

Role routing.

---

## assets/

Icons.

Images.

Branding.

---

# 16. Architecture Rules

Rule 1

Pages cannot directly read localStorage.

---

Rule 2

Components cannot call APIs.

---

Rule 3

Business logic belongs in services.

---

Rule 4

Calculation logic belongs in utils.

---

Rule 5

Seed data belongs in:

```text
src/data/seedData.js
```

only.

---

Rule 6

All pages must use shared components.

No duplicate UI.

---

# 17. Success Criteria

The MVP is successful if a judge can:

1. Log in.
2. Add a drug administration.
3. See withdrawal status.
4. Attempt sale.
5. Observe sale block.
6. Understand the problem being solved.

without explanation.

If that happens, the product has succeeded.

---

END OF PART 1

# AgriSafe
## Software Architecture & Product Specification
### Part 2 — Routing Architecture, Information Architecture & User Flows

---

# 18. Routing Philosophy

The routing architecture should prioritize:

- Simplicity
- Clear navigation
- Future backend integration
- Role separation
- Reusable layouts

This is **not** a multi-page website.

It is a desktop web application.

Users should feel like they are navigating a professional SaaS dashboard rather than opening different webpages.

Every page transition should feel seamless.

---

# 19. Routing Strategy

Use React Router DOM.

Each role has its own dashboard experience while sharing the same design system.

The application should use nested layouts.

```text
App
│
├── Login
│
├── Farmer Layout
│      ├── Dashboard
│      ├── Animals
│      ├── Animal Profile
│      ├── Drugs
│      ├── Consultation
│
├── Vet Layout
│      ├── Dashboard
│      ├── Appointments
│      ├── Animals
│      ├── Drugs
│
└── Admin Layout
       └── Dashboard
```

---

# 20. Route Structure

```text
/

↓

Login
```

---

Farmer

```text
/farmer/dashboard

/farmer/animals

/farmer/animals/:animalId

/farmer/drugs

/farmer/consultation
```

---

Vet

```text
/vet/dashboard

/vet/appointments

/vet/animals

/vet/animals/:animalId

/vet/drugs
```

---

Admin

```text
/admin/dashboard
```

---

Fallback

```text
*
↓

404
```

---

# 21. Future Routing

Later versions may include

```text
/settings

/profile

/reports

/certificates

/notifications

/government

/analytics
```

These should NOT be implemented now.

---

# 22. Information Architecture

The information hierarchy should reflect how each user thinks.

Instead of organizing data by database tables,

organize by user tasks.

---

Farmer thinks:

```text
My Farm

↓

My Animals

↓

Medication

↓

Withdrawal

↓

Can I Sell?
```

---

Vet thinks:

```text
Appointments

↓

Patients

↓

Treatment

↓

Recommendations
```

---

Admin thinks:

```text
Overview

↓

Compliance

↓

Violations

↓

Statistics
```

---

Every page should answer one primary question.

Never overload pages with multiple workflows.

---

# 23. Navigation Structure

## Login

↓

Role Selected

↓

Dedicated Workspace

No role switching from inside dashboards.

User returns to Login if another role is required.

---

Farmer Navigation

```text
Dashboard

Animals

Drugs

Consultation
```

---

Vet Navigation

```text
Dashboard

Appointments

Animals

Drugs
```

---

Admin Navigation

```text
Dashboard
```

---

Navigation should remain fixed throughout the session.

Only page content changes.

---

# 24. Sidebar Design

Sidebar is permanent.

Desktop only.

Never collapses.

---

Width

```text
260px
```

---

Contains

```text
Logo

Navigation

Spacer

Logout Button
```

---

Logo

```text
AgriSafe
```

Small subtitle

```text
Livestock Compliance Portal
```

---

Navigation Items

Use Lucide icons.

No emojis.

Each navigation item contains

```text
Icon

Title
```

---

Selected item

- Blue background
- Rounded corners
- Medium font weight

---

Hover

Very subtle background

150ms transition

---

Logout

Always fixed to bottom.

---

# 25. Top Navigation

Every page contains a consistent header.

Header includes

Left

```text
Page Title
```

---

Right

```text
Notification Bell

Current User

Avatar
```

Example

```text
John Farmer

Farmer
```

Avatar can simply display initials.

---

# 26. Login Flow

Landing page

↓

User enters

```text
Username

Password
```

(No validation)

↓

Three buttons

```text
Continue as Farmer

Continue as Vet

Continue as Admin
```

Each button stores

```text
currentRole
```

inside localStorage.

Then redirects.

---

# 27. Role-Based Navigation

No authentication.

Only role routing.

Example

```text
Continue as Farmer

↓

localStorage

↓

role = farmer

↓

redirect

↓

/farmer/dashboard
```

Exactly the same for

Vet

Admin

---

Future

This can later be replaced with

Supabase Auth

without changing UI.

---

# 28. Protected Layouts

Each role has its own layout.

```text
FarmerLayout

VetLayout

AdminLayout
```

Layouts contain

```text
Sidebar

Header

Page Container
```

Pages only render content.

They never recreate navigation.

---

Example

```text
<FarmerLayout>

Sidebar

Header

Outlet()

</FarmerLayout>
```

---

# 29. Route Guard

Even though authentication is fake,

role validation should exist.

Example

```text
role == farmer

↓

allow

else

↓

redirect Login
```

Later this becomes

JWT validation.

---

# 30. Page Hierarchy

## Farmer

Dashboard

↓

Animals

↓

Animal Profile

↓

Attempt Sale

---

Drugs

↓

Drug Database

↓

Drug Administration

---

Consultation

↓

Booking Form

↓

Confirmation

---

# 31. Dashboard Philosophy

Dashboard is NOT a workspace.

Dashboard is a summary.

It should answer

```text
What is happening on my farm?
```

It should never become cluttered.

Actions happen elsewhere.

---

Dashboard Sections

```text
Summary Cards

↓

Withdrawal Animals

↓

Recent Activity

↓

Quick Actions
```

---

Quick Actions

```text
Register Animal

Administer Drug

Book Consultation
```

These simply navigate to their respective pages.

---

# 32. Animals Section

Purpose

Manage livestock.

Contains

```text
Search

Filter

Animal Table

Register Animal
```

Clicking an animal opens

```text
Animal Profile
```

---

# 33. Animal Profile

This page is the heart of the application.

Contains

```text
Animal Information

Status Badge

Withdrawal Details

Drug History

Timeline

Attempt Sale
```

Attempt Sale button is only located here.

Never on Dashboard.

---

# 34. Drugs Section

Instead of separate pages,

Drugs should use tabs.

Tabs

```text
Drug Database

Drug Administration
```

---

Drug Database

Purpose

Maintain medicine records.

---

Drug Administration

Purpose

Record treatment given to animals.

---

Switching tabs should never reload the page.

---

# 35. Consultation Flow

Farmer

```text
Consultation

↓

Booking Form

↓

Confirmation Screen
```

Simple.

Static.

---

Booking fields

```text
Preferred Date

Preferred Time

Reason

Notes
```

---

Submission

↓

Toast

↓

Redirect

↓

Confirmation

---

# 36. Vet Dashboard Flow

Dashboard

↓

Appointment Queue

↓

Animal Profile

↓

Review Drug History

↓

Recommendation

(Mock only)

---

Dashboard focuses on

Appointments

instead of withdrawal.

---

# 37. Vet Dashboard Sections

Summary

```text
Today's Appointments

Pending Requests

Animals Assigned

Recent Consultations
```

---

Appointments

Card List

```text
Farmer

Animal

Requested Date

Status
```

---

Animals

Read-only.

No editing.

---

Drugs

Database only.

No administration.

---

# 38. Admin Dashboard

Static.

Purpose

Impress judges.

Contains

```text
Registered Farms

Registered Animals

Compliance %

Violations

System Health
```

Below

Recent Violations

Table

No interactions.

---

# 39. Navigation Rules

Navigation should NEVER

- Open modals
- Trigger data changes
- Show confirmation dialogs

Navigation only changes pages.

---

Actions happen inside pages.

---

# 40. Breadcrumbs

Not required.

Application is small.

Page titles are sufficient.

---

# 41. Empty States

Every list page should gracefully handle

No Data.

Example

Animals

```text
No animals registered.

Register your first animal.
```

Button

```text
Register Animal
```

---

Drugs

```text
No drugs available.

Add your first drug.
```

---

Appointments

```text
No appointments scheduled.
```

Never leave empty tables.

---

# 42. Loading States

Even though data is local,

simulate loading.

Approximately

```text
300–500ms
```

Purpose

Prototype feels realistic.

---

Use

Skeleton Cards

instead of spinners.

---

# 43. Error Pages

404

Simple.

Contains

```text
Illustration

Page Not Found

Return Home
```

---

No 500 page needed.

---

# 44. User Journey — Farmer

```text
Login

↓

Farmer Dashboard

↓

Animals

↓

Register Animal

↓

Animal Appears

↓

Drugs

↓

Drug Administration

↓

Withdrawal Calculated

↓

Dashboard Updated

↓

Animal Profile

↓

Attempt Sale

↓

Sale Blocked

↓

Dashboard Shows Alert

↓

Consultation

↓

Booking Confirmation
```

This is the complete primary demo journey.

---

# 45. User Journey — Vet

```text
Login

↓

Vet Dashboard

↓

View Today's Appointments

↓

Open Animal

↓

Review Drug History

↓

Review Withdrawal

↓

Recommendation
```

Static.

No editing.

---

# 46. User Journey — Admin

```text
Login

↓

Admin Dashboard

↓

System Overview

↓

Compliance Metrics

↓

Recent Violations
```

Purely visual.

---

# 47. Future Scalability

The routing architecture should support adding

```text
Reports

Certificates

Government Portal

Analytics

Settings

Notifications

Audit Logs
```

without restructuring existing routes.

---

# 48. Routing Best Practices

✔ Nested layouts

✔ Shared sidebar

✔ Shared header

✔ Outlet rendering

✔ Service-driven navigation

✔ Protected role routes

✔ Consistent page spacing

✔ Smooth transitions

✔ No duplicated layouts

✔ Backend-ready architecture

---

# 49. Definition of Navigation Success

A first-time user should be able to:

- Understand where they are.
- Reach any feature in one or two clicks.
- Never wonder where to find an action.
- Never lose context while navigating.

The application should feel cohesive, predictable, and intentionally designed, with every workflow supporting the central objective of preventing unsafe livestock sales due to incomplete withdrawal periods.

---

**END OF PART 2**

# AgriSafe
## Software Architecture & Product Specification
### Part 3 — Complete Page Specifications

---

# 50. Page Design Standards

Every page in AgriSafe must follow a consistent visual language.

Every page consists of:

```
-----------------------------------------------------
Header
-----------------------------------------------------

Page Title
Short Description
Primary Action (if applicable)

-----------------------------------------------------

Main Content
```

All pages should use

- 32px page padding
- 24px section spacing
- 20px card radius
- Soft shadows
- White cards
- Light gray background

No page should feel visually different from another.

---

# 51. Login Page

## Purpose

Allow users to enter the application by selecting a role.

No authentication is performed.

---

## Layout

Desktop centered layout.

```
------------------------------------------------

              AgriSafe Logo

      Livestock Compliance Portal

-------------------------------

Username

Password

-------------------------------

Continue as Farmer

Continue as Vet

Continue as Admin

------------------------------------------------
```

---

## Components

• Logo

• App Name

• Username Field

• Password Field

• Three Role Buttons

---

## Inputs

Username

Password

No validation.

No error states.

---

## Actions

Continue as Farmer

↓

Store

```
currentRole = farmer
```

↓

Redirect

```
/farmer/dashboard
```

Exactly the same logic applies for

Vet

Admin

---

## UX Notes

Buttons should be large.

Full width.

Primary blue.

Hover elevation.

Icons

Farmer

Lucide User

Vet

Lucide Stethoscope

Admin

Lucide Shield

---

## Future Integration

Replace fake login with

Supabase Authentication

No UI changes required.

---

# 52. Farmer Dashboard

## Purpose

Provide an overview of farm health.

Not a workspace.

Not a CRUD page.

Dashboard should answer

```
What is happening on my farm today?
```

---

## Layout

```
------------------------------------------------

Header

------------------------------------------------

Summary Cards

------------------------------------------------

Animals Under Withdrawal

------------------------------------------------

Recent Activity

------------------------------------------------

Quick Actions

------------------------------------------------
```

---

## Section 1

Summary Cards

Cards

```
Registered Animals

Animals Under Withdrawal

Safe To Sell

Sale Violations
```

Each card

Large Number

Small Label

Icon

---

## Section 2

Animals Under Withdrawal

Table

Columns

```
Animal

Drug

Days Remaining

Status
```

Status

Amber Badge

```
Withdrawal
```

---

## Section 3

Recent Activity

Timeline

Example

```
Animal Registered

Drug Administered

Withdrawal Calculated

Consultation Booked

Sale Attempt Blocked
```

Newest first.

---

## Section 4

Quick Actions

Large cards

```
Register Animal

Administer Drug

Book Consultation
```

These navigate to pages.

They do NOT open modals.

---

## Red Alert Banner

NOT visible by default.

Only appears after

```
Attempt Sale

↓

Blocked
```

Banner

```
Sale Blocked

Cow A-014 cannot be sold.

Withdrawal ends in 3 days.
```

Dismissible.

---

## Empty State

If no data

```
No animals registered.

Register your first animal.
```

---

# 53. Animals Page

## Purpose

Manage livestock.

Contains all registered animals.

---

## Header

```
Animals

Manage your livestock inventory.
```

Top Right

```
Register Animal
```

Button

---

## Layout

```
Header

-------------------

Search

Filter

-------------------

Animal Table
```

---

## Search

Search by

```
Animal ID

Species

Breed
```

Real-time filtering.

---

## Filter

Dropdown

```
All

Safe

Withdrawal

Violation
```

---

## Animal Table

Columns

```
Animal ID

Species

Breed

Age

Gender

Status

Actions
```

---

## Status Badge

Green

```
Safe
```

Amber

```
Withdrawal
```

Red

```
Violation
```

---

## Action Button

```
View Profile
```

Routes

```
/animals/:id
```

---

## Register Animal

Opens modal.

Never another page.

---

Modal Fields

```
Animal ID

Species

Breed

Age

Gender
```

Buttons

```
Cancel

Register Animal
```

---

Success

Toast

```
Animal Registered Successfully
```

Animal appears immediately.

---

# 54. Animal Profile

## Purpose

Central page of the application.

Every important workflow starts here.

---

## Layout

```
Animal Information

------------------------

Withdrawal Status

------------------------

Drug History

------------------------

Timeline

------------------------

Attempt Sale
```

---

## Section 1

Animal Information

Display

```
Animal ID

Species

Breed

Age

Gender
```

Read-only.

---

## Section 2

Withdrawal Status

Card

Shows

```
Current Drug

Withdrawal Days

Remaining Days

Current Status
```

Large badge.

---

## Status Colors

Green

```
Safe To Sell
```

Amber

```
Withdrawal In Progress
```

Red

```
Violation
```

---

## Section 3

Drug History

Table

Columns

```
Drug

Date

Dose

Withdrawal

Status
```

Newest first.

---

## Section 4

Timeline

Vertical timeline

Example

```
Animal Registered

Drug Administered

Withdrawal Started

Attempt Sale

Sale Blocked
```

---

## Section 5

Attempt Sale

Large button

```
Attempt Sale
```

Primary action.

---

Flow

Click

↓

Confirmation Modal

```
Confirm Sale?

This action checks withdrawal status.
```

Buttons

```
Cancel

Confirm Sale
```

---

Logic

If

```
Remaining Days > 0
```

↓

Sale blocked

↓

Toast

↓

Alert Banner

↓

Timeline updated

↓

Dashboard refreshed

---

Else

```
Sale Successful
```

Green toast.

Status updates.

---

# 55. Drugs Page

Instead of two sidebar pages,

Drugs uses tabs.

Tabs

```
Drug Database

Drug Administration
```

No page reload.

---

# 56. Drug Database

## Purpose

Store medicines available in the system.

NOT administration history.

---

## Header

```
Drug Database
```

Top Right

```
Add Drug
```

---

## Table

Columns

```
Drug Name

Withdrawal Days

Species

Status

Actions
```

---

## Status

Always

```
Active
```

Prototype only.

---

## Add Drug Modal

Fields

```
Drug Name

Species

Withdrawal Days

Description
```

Buttons

```
Cancel

Save Drug
```

---

Success

Toast

```
Drug Added
```

Appears immediately.

---

Future

Will connect to

Drug API.

---

# 57. Drug Administration

## Purpose

Record medicine given to an animal.

---

## Header

```
Drug Administration
```

---

## Layout

Large Card

---

Fields

```
Animal

Drug

Dose

Administration Date
```

Animal

Searchable dropdown.

Drug

Searchable dropdown.

Date

Defaults

Today.

---

Button

```
Save Administration
```

---

Logic

Save

↓

Calculate Withdrawal

↓

Update Animal

↓

Timeline

↓

Dashboard

↓

Toast

```
Withdrawal Calculated Successfully
```

---

No manual calculation.

Always automatic.

---

# 58. Consultation Page

## Purpose

Allow farmer to request veterinary consultation.

Prototype only.

---

## Layout

```
Consultation Form
```

---

Fields

```
Preferred Date

Preferred Time

Reason

Notes
```

---

Button

```
Book Consultation
```

---

Submission

↓

Success Page

---

Success Message

```
Consultation Requested

Your request has been sent.

The assigned veterinarian will review your appointment.
```

---

Button

```
Return to Dashboard
```

---

Future

Will integrate

Video calls

Messaging

Scheduling

---

# 59. Alerts

Alerts should never exist as a dedicated workflow.

They are notifications.

---

## Alert Types

Danger

```
Sale Blocked
```

Success

```
Animal Registered
```

Info

```
Drug Added
```

Success

```
Withdrawal Calculated
```

Info

```
Consultation Booked
```

---

## Alert Placement

Danger

Top banner

Dashboard

---

Success

Toast

Top Right

---

Info

Toast

Top Right

---

# 60. Toast System

Every action should provide immediate feedback.

Examples

```
✓ Animal Registered

✓ Drug Added

✓ Withdrawal Calculated

✓ Consultation Booked

✕ Sale Blocked
```

Auto dismiss

4 seconds.

---

# 61. Modal Standards

Used for

```
Register Animal

Add Drug

Attempt Sale
```

Never for

Viewing pages.

---

Animation

Fade

Scale

200ms.

---

Buttons

Always

```
Secondary

Primary
```

Left

Right

---

# 62. Search Standards

Animals

Search

```
ID

Species

Breed
```

---

Drugs

Search

```
Drug Name

Species
```

---

Search updates instantly.

No search button.

---

# 63. Empty States

Animals

```
No Animals Registered
```

Button

```
Register Animal
```

---

Drug Database

```
No Drugs Available
```

Button

```
Add Drug
```

---

Drug History

```
No Drugs Administered
```

---

Consultation

```
No Appointments Yet
```

---

Never display empty tables.

---

# 64. Page Consistency Rules

Every page must contain

✓ Title

✓ Description

✓ Primary Action

✓ Search (if needed)

✓ White cards

✓ Rounded corners

✓ Consistent spacing

✓ Toast feedback

✓ Loading skeletons

✓ Empty state

---

# 65. Demo Priority Order

If development time becomes limited, pages should be completed in the following order:

```
1. Login

2. Farmer Dashboard

3. Animals

4. Animal Profile

5. Drug Administration

6. Drug Database

7. Consultation

8. Vet Dashboard

9. Admin Dashboard
```

The first six pages are sufficient to deliver the complete demo narrative.

---

# 66. Definition of Success

A judge should be able to complete the following workflow without assistance:

```
Login

↓

View Dashboard

↓

Register Animal

↓

Administer Drug

↓

Open Animal Profile

↓

Attempt Sale

↓

Observe Sale Blocked

↓

Return to Dashboard

↓

See Updated Withdrawal Status and Alert
```

If this journey feels smooth, responsive, visually polished, and clearly communicates the value proposition, the frontend MVP has achieved its objective.

---

**END OF PART 3**

# AgriSafe
## Software Architecture & Product Specification
### Part 4 — Component Library & Design System

---

# 67. Component Philosophy

The UI must be built using reusable components.

Every page should be assembled using the same component library.

No page should create its own buttons, cards, badges, tables or layouts.

A component should have a single responsibility.

Example:

❌ AnimalCard that also fetches data.

✅ AnimalCard that only displays data.

Business logic always belongs in Services.

---

# 68. Component Directory Structure

```text
components/

├── common/
│
│   Navbar.jsx
│   Sidebar.jsx
│   PageHeader.jsx
│   Button.jsx
│   Card.jsx
│   Badge.jsx
│   Input.jsx
│   Select.jsx
│   SearchBar.jsx
│   Table.jsx
│   EmptyState.jsx
│   LoadingSkeleton.jsx
│   ConfirmationModal.jsx
│   Toast.jsx
│   AlertBanner.jsx
│
├── dashboard/
│
│   SummaryCard.jsx
│   QuickActionCard.jsx
│   RecentActivity.jsx
│   WithdrawalTable.jsx
│
├── animal/
│
│   AnimalCard.jsx
│   AnimalTable.jsx
│   AnimalStatusBadge.jsx
│   AnimalTimeline.jsx
│   AnimalInformation.jsx
│
├── drug/
│
│   DrugTable.jsx
│   DrugAdministrationForm.jsx
│   DrugDatabaseForm.jsx
│
├── consultation/
│
│   ConsultationForm.jsx
│   AppointmentCard.jsx
│
└── forms/

    AnimalRegisterForm.jsx

    LoginForm.jsx
```

---

# 69. Component Design Rules

Every reusable component must

✓ Receive props

✓ Never fetch data

✓ Never access localStorage

✓ Never contain business logic

✓ Never perform routing

✓ Be reusable

---

# 70. Shared Components

These components are used across the entire application.

---

## Button

Purpose

Primary user interaction.

Variants

```text
Primary

Secondary

Danger

Ghost

Success
```

Sizes

```text
Small

Medium

Large
```

States

```text
Default

Hover

Active

Loading

Disabled
```

Supports

```text
Icon Left

Icon Right

Loading Spinner
```

---

## Card

Purpose

Display grouped information.

Used for

Dashboard

Forms

Tables

Animal Profile

Statistics

Properties

```text
Rounded

White

Shadow

Padding
```

No gradients.

No colored backgrounds.

---

## Badge

Purpose

Status indicator.

Variants

```text
Success

Warning

Danger

Info

Neutral
```

Examples

```text
Safe

Withdrawal

Violation

Completed

Pending
```

---

## Input

Reusable text field.

Supports

```text
Label

Placeholder

Helper Text

Error Message
```

Variants

```text
Text

Number

Password

Date

Time
```

---

## Select

Purpose

Dropdown selection.

Used for

```text
Animal

Species

Drug

Gender

Status
```

Must support search later.

---

## SearchBar

Reusable.

Contains

Search icon

Input

Clear button

Real-time filtering.

---

## EmptyState

Purpose

Handle empty pages gracefully.

Contains

```text
Illustration

Title

Description

Action Button
```

Example

```
No Animals Registered

Register your first animal.
```

---

## LoadingSkeleton

Purpose

Replace loading spinners.

Variants

```text
Card

Table

Profile

Dashboard
```

Duration

300-500ms

---

# 71. Layout Components

---

## Sidebar

Permanent.

Never collapses.

Width

```text
260px
```

Contains

```text
Logo

Navigation

Spacer

Logout
```

Navigation Item

```
Icon

Title
```

Selected state

Blue background.

Rounded.

---

## Navbar

Fixed.

Height

```text
72px
```

Contains

Left

```text
Page Title

Subtitle
```

Right

```text
Notification

User

Avatar
```

Never contains navigation.

---

## PageHeader

Reusable.

Every page begins with

```text
Title

Description

Primary Button
```

Example

```
Animals

Manage your livestock inventory.

Register Animal
```

---

## PageContainer

Purpose

Consistent spacing.

Applies

```text
Padding

Max Width

Gap
```

Used by every page.

---

# 72. Forms

Forms should always use

White card

Vertical layout

Consistent spacing

Large click targets

---

## LoginForm

Fields

```text
Username

Password
```

Buttons

```text
Continue as Farmer

Continue as Vet

Continue as Admin
```

---

## AnimalRegisterForm

Fields

```text
Animal ID

Species

Breed

Age

Gender
```

Buttons

```text
Cancel

Register Animal
```

---

## DrugDatabaseForm

Fields

```text
Drug Name

Species

Withdrawal Days

Description
```

Buttons

```text
Cancel

Save Drug
```

---

## DrugAdministrationForm

Fields

```text
Animal

Drug

Dose

Administration Date
```

Button

```text
Save Administration
```

---

## ConsultationForm

Fields

```text
Preferred Date

Preferred Time

Reason

Notes
```

Button

```text
Book Consultation
```

---

# 73. Form Guidelines

Labels always visible.

Never rely on placeholders.

Required fields

Marked

```
*
```

Buttons aligned right.

Validation messages

Below inputs.

Consistent spacing

24px

---

# 74. Cards

Cards are the primary building block.

All cards share

```text
20px Radius

White Background

Soft Shadow

24px Padding
```

---

## SummaryCard

Dashboard statistics.

Contains

```text
Icon

Value

Label
```

Examples

```
27

Registered Animals
```

---

## QuickActionCard

Contains

Icon

Title

Description

Arrow

Entire card clickable.

---

## AnimalCard

Used in responsive layouts.

Displays

```text
Animal ID

Species

Status

Button
```

---

## AppointmentCard

Displays

```text
Farmer

Animal

Time

Status
```

---

## ActivityCard

Displays

```text
Action

Timestamp

Icon
```

---

# 75. Tables

Tables should feel modern.

Avoid heavy borders.

Use alternating spacing.

---

## Animal Table

Columns

```text
Animal ID

Species

Breed

Age

Gender

Status

Actions
```

---

## Drug Table

Columns

```text
Drug Name

Species

Withdrawal

Status

Actions
```

---

## Withdrawal Table

Columns

```text
Animal

Drug

Remaining Days

Status
```

---

## Appointment Table

Columns

```text
Farmer

Animal

Date

Status
```

---

# 76. Table Behavior

Hover

Light gray.

Click

Highlights row.

Pagination

Not required.

Sorting

Future implementation.

Filtering

Client side.

---

# 77. Timeline Component

Used in

Animal Profile.

Vertical layout.

Example

```
Animal Registered

↓

Drug Administered

↓

Withdrawal Started

↓

Sale Attempt

↓

Sale Blocked
```

Newest first.

Icons

Lucide only.

---

# 78. Status Badge

Single reusable component.

Variants

Green

```
Safe
```

Amber

```
Withdrawal
```

Red

```
Violation
```

Gray

```
Inactive
```

Used everywhere.

Never recreate.

---

# 79. Alert Banner

Purpose

High priority notification.

Used only for

Sale Blocked.

Never shown permanently.

Position

Top of Dashboard.

Contains

```text
Danger Icon

Title

Description

Dismiss Button
```

Example

```
Sale Blocked

Cow A-014 cannot be sold.

3 withdrawal days remaining.
```

---

# 80. Toast Component

Purpose

Quick feedback.

Appears

Top Right.

Auto dismiss

4 seconds.

Supports

```text
Success

Info

Warning

Danger
```

Examples

```
Animal Registered

Drug Added

Withdrawal Calculated

Consultation Booked

Sale Blocked
```

---

# 81. Modal Component

Reusable.

Never page-specific.

Uses

Dark overlay.

Centered.

Rounded corners.

Large spacing.

---

Variants

```text
Confirmation

Form

Information
```

---

Current Uses

```text
Register Animal

Add Drug

Attempt Sale
```

---

Structure

```
Title

Description

Content

Divider

Actions
```

Buttons

```
Cancel

Confirm
```

---

Animation

Fade

Scale

200ms

---

# 82. Confirmation Modal

Used only for destructive actions.

Current use

Attempt Sale.

Message

```
Confirm Sale?

This action checks whether the animal has completed its withdrawal period.
```

Buttons

```text
Cancel

Confirm
```

---

# 83. Tabs Component

Used only inside

Drugs page.

Tabs

```
Drug Database

Drug Administration
```

Animated underline.

No page reload.

---

# 84. Avatar Component

Purpose

Display current user.

Prototype

Circle.

Initials only.

Example

```
JF
```

No images required.

---

# 85. Icon Guidelines

Icons

Lucide React only.

Never emojis.

Common icons

```
Home

Cow

Pill

Clipboard

Bell

Search

Plus

Trash

Edit

Eye

Check

X

Shield

Stethoscope

User

Calendar

Clock

AlertTriangle

BadgeCheck
```

Icon size

20px

Dashboard cards

24px

---

# 86. Component Reusability Matrix

```text
Component             Used In
---------------------------------------------
Button                Entire Application
Card                  Entire Application
Badge                 Entire Application
Toast                 Entire Application
Modal                 Entire Application
SearchBar             Animals, Drugs
PageHeader            Every Page
Sidebar               Every Dashboard
Navbar                Every Dashboard
SummaryCard           Dashboard
QuickActionCard       Dashboard
AnimalCard            Animals
AnimalTable           Animals
DrugTable             Drugs
Timeline              Animal Profile
ConsultationForm      Consultation
```

No duplicate implementations.

---

# 87. Animation Philosophy

Animations should communicate state.

Never decoration.

Every animation must have a purpose.

---

Animation Speed

```
150–200ms
```

---

Easing

```
ease-in-out
```

---

# 88. Hover Animations

Cards

Slight elevation.

Shadow increase.

Buttons

Background transition.

Navigation

Soft highlight.

Tables

Row highlight.

No bouncing.

No scaling.

---

# 89. Entry Animations

Dashboard

Fade in.

Cards

Staggered fade.

Tables

Fade.

Modals

Scale + Fade.

Toasts

Slide Down.

Alert Banner

Slide from Top.

---

# 90. Microinteractions

Button Click

Slight press.

Status Badge

Smooth color transition.

Search

Instant filtering.

Modal Close

Fade.

Toast Remove

Slide Up.

Tab Change

Underline animation.

Sidebar Hover

Background fade.

---

# 91. Accessibility Guidelines

Minimum touch target

44px

Visible focus ring.

Keyboard navigation.

Labels on every input.

Icons paired with text.

Color never the only status indicator.

---

# 92. Component Success Criteria

The component library is considered complete when

✓ Every page is built entirely from reusable components.

✓ No duplicate UI exists.

✓ Business logic remains outside components.

✓ Every status uses the same Badge component.

✓ Every page uses the same PageHeader.

✓ Every modal shares one implementation.

✓ Every notification shares one Toast system.

✓ Every table follows the same styling.

✓ Every form follows identical spacing and validation rules.

The UI should feel like a single cohesive product rather than individually designed pages.

---

## END OF PART 4

````md
# AgriSafe
## Software Architecture & Product Specification
### Part 5 — Local Storage Architecture, Service Layer & Backend Integration

---

# 93. Philosophy

Although this hackathon MVP will use Local Storage, the application should be architected exactly like a production application.

**The UI must never know where the data comes from.**

Today

```
React Components
        ↓
Service Layer
        ↓
Local Storage
```

Future

```
React Components
        ↓
Service Layer
        ↓
REST API
        ↓
Express
        ↓
Supabase
```

The only code that changes is the implementation inside the Service Layer.

Everything else remains untouched.

---

# 94. Architecture Layers

```
Pages

↓

Reusable Components

↓

Context

↓

Service Layer

↓

Storage Adapter

↓

Local Storage
```

Future

```
Pages

↓

Reusable Components

↓

Context

↓

Service Layer

↓

Axios API

↓

Express Backend

↓

Supabase
```

This separation is mandatory.

---

# 95. Local Storage Structure

Every entity has its own storage key.

Never create one giant object.

Preferred structure

```
animals

drugs

drugAdministrations

appointments

alerts

activityLogs

currentUser

appSettings
```

Each key stores JSON.

Example

```
localStorage

↓

animals

↓

[]

```

---

# 96. Storage Keys

## animals

Stores registered livestock.

---

## drugs

Stores medicines available.

---

## drugAdministrations

Stores treatments given to animals.

---

## appointments

Stores consultation requests.

---

## alerts

Stores generated alerts.

---

## activityLogs

Stores timeline events.

---

## currentUser

Stores

```
Role

Username

Login Time
```

---

## appSettings

Future use.

Theme.

Language.

Preferences.

---

# 97. Storage Rules

Never

```
localStorage.setItem()

```

inside pages.

Never inside components.

Only inside services.

---

Never

```
JSON.parse()

```

inside UI.

---

Never duplicate data.

Example

Do NOT store

```
Animal Status

inside animals

and

inside withdrawal
```

Store once.

Calculate where possible.

---

# 98. Data Flow

Example

Register Animal

```
Page

↓

AnimalForm

↓

animalService

↓

storageService

↓

localStorage

↓

Response

↓

Toast

↓

Refresh UI
```

UI never touches storage.

---

# 99. Storage Adapter

Create

```
src/services/storageService.js
```

Purpose

Single gateway to Local Storage.

Functions

```
get()

set()

remove()

clear()

exists()
```

Example

```javascript
storageService.get("animals")

storageService.set("animals", data)

storageService.remove("animals")

storageService.clear()
```

Future

Replace with API.

---

# 100. Fake API Philosophy

Every service should behave like a REST API.

Even though data is local.

Each function returns

```
Promise
```

Example

```javascript
return Promise.resolve(data)
```

or

```javascript
await delay(300)
```

Purpose

Application feels realistic.

Future backend integration becomes effortless.

---

# 101. Service Layer Structure

```
services/

api.js

storageService.js

authService.js

animalService.js

drugService.js

consultationService.js

alertService.js

activityService.js
```

Every service has one responsibility.

---

# 102. api.js

Purpose

Shared API abstraction.

Current implementation

```
Fake Promise Wrapper
```

Future

Axios Instance.

Responsibilities

- Delay simulation
- Error simulation
- Shared response format

---

# 103. Standard API Response

Every service returns

```javascript
{
    success: true,
    message: "",
    data: {}
}
```

or

```javascript
{
    success: false,
    message: "",
    error: {}
}
```

Never return raw arrays.

---

# 104. Auth Service

File

```
authService.js
```

Responsibilities

- Fake login
- Logout
- Current user
- Current role

Functions

```javascript
login()

logout()

getCurrentUser()

getRole()

isAuthenticated()
```

Future

Supabase Auth.

---

# 105. Animal Service

File

```
animalService.js
```

Responsibilities

Manage livestock.

Functions

```javascript
getAnimals()

getAnimalById(id)

createAnimal(data)

updateAnimal(id)

deleteAnimal(id)

searchAnimals(query)

filterAnimals(status)
```

Future API

```
GET /animals

GET /animals/:id

POST /animals

PUT /animals/:id

DELETE /animals/:id
```

---

# 106. Drug Service

Responsibilities

Drug database

Drug administration

Withdrawal calculations

Functions

```javascript
getDrugs()

createDrug()

updateDrug()

deleteDrug()

administerDrug()

getDrugHistory()

calculateWithdrawal()
```

Future API

```
GET /drugs

POST /drugs

PUT /drugs/:id

DELETE /drugs/:id

POST /drug-administrations
```

---

# 107. Consultation Service

Functions

```javascript
bookAppointment()

getAppointments()

updateAppointment()

cancelAppointment()
```

Future API

```
GET /appointments

POST /appointments

PUT /appointments/:id
```

---

# 108. Alert Service

Purpose

Manage application alerts.

Functions

```javascript
createAlert()

dismissAlert()

getAlerts()

clearAlerts()
```

Future API

```
GET /alerts

POST /alerts
```

---

# 109. Activity Service

Purpose

Maintain timeline.

Functions

```javascript
logActivity()

getActivities()

clearActivities()
```

Every important action creates activity.

Example

```
Animal Registered

Drug Administered

Withdrawal Calculated

Consultation Booked

Sale Blocked
```

---

# 110. Withdrawal Calculation

Current MVP

Static lookup.

```
Drug

↓

Withdrawal Days

↓

Remaining Days

↓

Status
```

No AI.

No database.

Uses

```
utils/mrlLookup.js
```

---

# 111. Service Communication

Animal Registered

↓

Animal Service

↓

Activity Service

↓

Alert Service

↓

Dashboard Refresh

Services should communicate.

Pages should not.

---

# 112. Storage Data Models

---

## Animal

```javascript
{
    id: "A-014",

    species: "Cow",

    breed: "Holstein",

    age: 4,

    gender: "Female",

    currentStatus: "withdrawal",

    currentDrugAdministrationId: "DA-101",

    createdAt: "",

    updatedAt: ""
}
```

---

## Drug

```javascript
{
    id: "DR-001",

    name: "Oxytetracycline",

    species: "Cattle",

    withdrawalDays: 7,

    description: "",

    active: true
}
```

---

## Drug Administration

```javascript
{
    id: "DA-101",

    animalId: "A-014",

    drugId: "DR-001",

    dose: "10ml",

    administrationDate: "",

    withdrawalEndDate: "",

    remainingDays: 5,

    status: "withdrawal"
}
```

---

## Appointment

```javascript
{
    id: "",

    animalId: "",

    farmer: "",

    preferredDate: "",

    preferredTime: "",

    reason: "",

    notes: "",

    status: "Pending"
}
```

---

## Alert

```javascript
{
    id: "",

    type: "danger",

    title: "Sale Blocked",

    message: "",

    createdAt: "",

    dismissed: false
}
```

---

## Activity

```javascript
{
    id: "",

    type: "Drug Administration",

    description: "",

    createdAt: ""
}
```

---

# 113. Seed Data

Create

```
src/data/seedData.js
```

Contains

```
animals

drugs

appointments

activities
```

No logic.

Only data.

---

# 114. Seed Initialization

On first launch

```
App Starts

↓

Check

animals

↓

Exists?

↓

No

↓

Copy seedData

↓

Save

↓

Launch
```

Never overwrite existing storage.

---

# 115. Demo Seed Dataset

Animals

```
Cow A-014

Withdrawal

↓

Cow A-008

Safe

↓

Goat G-021

Safe
```

---

Drugs

```
Oxytetracycline

Amoxicillin

Penicillin

Enrofloxacin

Ivermectin
```

Each contains withdrawal period.

---

Appointments

```
One Pending

One Completed
```

---

Activities

```
Animal Registered

Drug Administered

Consultation Booked
```

---

# 116. Future API Contracts

Animal

```
GET

/api/animals
```

```
GET

/api/animals/:id
```

```
POST

/api/animals
```

```
PUT

/api/animals/:id
```

```
DELETE

/api/animals/:id
```

---

Drug

```
GET

/api/drugs
```

```
POST

/api/drugs
```

```
PUT

/api/drugs/:id
```

---

Drug Administration

```
POST

/api/drug-administrations
```

```
GET

/api/drug-administrations
```

---

Appointments

```
GET

/api/appointments
```

```
POST

/api/appointments
```

---

Alerts

```
GET

/api/alerts
```

```
POST

/api/alerts
```

---

Dashboard

```
GET

/api/dashboard/summary
```

Future endpoint.

---

# 117. Response Examples

Success

```json
{
  "success": true,
  "message": "Animal registered successfully.",
  "data": {
    "id": "A-014"
  }
}
```

Failure

```json
{
  "success": false,
  "message": "Animal not found.",
  "error": {}
}
```

Every service follows identical responses.

---

# 118. Error Simulation

During prototype

Randomly simulate

```
Network delay

↓

500ms
```

Optional

Simulate

```
10%

Request Failed
```

for realistic UI testing.

Disable during demo.

---

# 119. Migration Strategy

When backend is implemented

Delete

```
storageService.js
```

Replace

```
api.js
```

with Axios.

Modify

```
animalService

drugService

consultationService

alertService

activityService
```

No UI components.

No pages.

No layouts.

No routing.

No forms.

Need modification.

This is the primary architectural objective.

---

# 120. Backend Readiness Checklist

The frontend is considered backend-ready when

✓ Components never access Local Storage.

✓ Pages never manipulate JSON.

✓ Every entity has a dedicated service.

✓ Every service returns Promises.

✓ API responses follow a shared format.

✓ Seed data is isolated.

✓ Storage logic is centralized.

✓ Future Express endpoints map one-to-one with service methods.

✓ Replacing Local Storage with REST APIs requires changes only within the service layer.

This ensures the hackathon prototype can evolve into a production-grade application with minimal refactoring.

---

## END OF PART 5
````


````md
# AgriSafe
## Software Architecture & Product Specification
### Part 6 — Design System, Development Guidelines & Antigravity Instructions

---

# 121. Design Philosophy

AgriSafe should feel like a premium desktop SaaS application.

The design language should combine the simplicity of Apple with the productivity-focused interface of Linear.

Users should immediately feel that the application is:

- Professional
- Modern
- Reliable
- Clean
- Trustworthy
- Enterprise-ready

The interface should never feel like a university project or a Bootstrap admin template.

---

# 122. Tailwind Design Tokens

All styling should be based on reusable design tokens.

Avoid hardcoding colors throughout the application.

---

## Border Radius

```text
Buttons
rounded-xl

Cards
rounded-2xl

Inputs
rounded-xl

Tables
rounded-xl

Badges
rounded-full

Modals
rounded-2xl
```

---

## Container Width

Main content

```text
max-w-7xl
```

Forms

```text
max-w-xl
```

Dashboard cards

```text
w-full
```

---

## Padding

Cards

```text
p-6
```

Dashboard

```text
p-8
```

Forms

```text
p-6
```

Modals

```text
p-8
```

---

## Gap System

Small

```text
gap-2
```

Medium

```text
gap-4
```

Large

```text
gap-6
```

Section

```text
gap-8
```

Page

```text
gap-10
```

---

# 123. Color Palette

## Background

```css
#F7F7F5
```

Tailwind

```
bg-stone-50
```

---

## Surface

```css
#FFFFFF
```

```
bg-white
```

---

## Primary

```css
#2563EB
```

```
bg-blue-600
```

Hover

```
bg-blue-700
```

---

## Success

```css
#16A34A
```

```
bg-green-600
```

---

## Warning

```css
#D97706
```

```
bg-amber-600
```

---

## Danger

```css
#DC2626
```

```
bg-red-600
```

---

## Border

```css
#E5E7EB
```

```
border-gray-200
```

---

## Text Primary

```css
#111827
```

```
text-gray-900
```

---

## Text Secondary

```css
#6B7280
```

```
text-gray-500
```

---

## Sidebar

Background

```
bg-white
```

Border

```
border-r border-gray-200
```

---

## Hover

```
bg-gray-100
```

---

## Selected Navigation

```
bg-blue-50

text-blue-700
```

---

# 124. Typography

Font

```
Inter
```

Imported through Google Fonts.

---

Page Title

```
text-3xl

font-semibold
```

---

Section Title

```
text-xl

font-semibold
```

---

Card Value

```
text-3xl

font-bold
```

---

Card Label

```
text-sm

text-gray-500
```

---

Body

```
text-base
```

---

Caption

```
text-sm
```

---

Button

```
text-sm

font-medium
```

---

Input Label

```
text-sm

font-medium
```

---

Table Header

```
text-xs

uppercase

tracking-wide
```

---

# 125. Spacing System

Use an 8px spacing scale.

Avoid arbitrary values.

Preferred spacing

```
2

4

6

8

10

12

16

20

24

32
```

---

Page Padding

```
32px
```

---

Card Padding

```
24px
```

---

Form Gap

```
24px
```

---

Section Margin

```
32px
```

---

# 126. Shadows

Avoid dramatic shadows.

Cards

```
shadow-sm
```

Hover

```
shadow-md
```

Modals

```
shadow-xl
```

Dropdowns

```
shadow-lg
```

No colored shadows.

---

# 127. Border Style

Every card

```
border

border-gray-200
```

Tables

```
border-gray-100
```

Inputs

```
border-gray-300
```

Focus

```
ring-2

ring-blue-500
```

---

# 128. Motion Guidelines

Animations should communicate interaction.

Never distract.

---

Animation Duration

```
150ms

200ms
```

Maximum

```
250ms
```

---

Easing

```
ease-in-out
```

---

Opacity transitions

```
transition-opacity
```

---

Transform transitions

```
transition-transform
```

---

Never use

```
Bounce

Elastic

Rotate

Flash

Shake

Pulse
```

unless specifically indicating an error.

---

# 129. Hover Guidelines

Buttons

Slightly darker.

Cards

Slight elevation.

Navigation

Background highlight.

Rows

Light gray.

Quick Actions

Lift 2px.

---

# 130. Loading Guidelines

Never use spinning loaders.

Instead

Skeleton UI.

Examples

```
Dashboard Skeleton

Table Skeleton

Card Skeleton

Profile Skeleton
```

Duration

```
300-500ms
```

---

# 131. Toast Motion

Appears

Top Right.

Animation

```
Translate Y

Fade
```

Duration

```
200ms
```

Dismiss

```
Fade Out

Slide Up
```

---

# 132. Modal Motion

Overlay

Fade.

Window

Scale 95%

↓

100%

Duration

```
200ms
```

Close

Reverse.

---

# 133. Sidebar Motion

Navigation Hover

```
Background Fade
```

Selected

```
Instant
```

Sidebar itself

Never animates.

---

# 134. Coding Standards

Use functional components only.

Never use class components.

---

Use

```jsx
const Component = () => {}
```

---

Prefer named exports.

Keep files small.

Maximum

```
250 lines
```

If larger

Split component.

---

Use descriptive names.

Good

```
AnimalProfileCard
```

Bad

```
Card2
```

---

# 135. React Standards

Use

```
Hooks
```

No class lifecycle.

---

Use

```
const

let
```

Never

```
var
```

---

Prefer

```
Arrow Functions
```

---

Destructure props.

Example

```jsx
const Card = ({ title, children }) => {}
```

---

# 136. File Naming

Components

```
PascalCase
```

```
AnimalCard.jsx
```

---

Pages

```
PascalCase
```

---

Services

```
camelCase
```

```
animalService.js
```

---

Utils

```
camelCase
```

---

Hooks

```
useSomething.js
```

---

# 137. Tailwind Standards

Use Tailwind only.

Avoid custom CSS unless absolutely necessary.

Prefer utility classes.

Do not use inline styles.

---

Class ordering

```
Layout

Spacing

Sizing

Typography

Color

Effects

Transitions
```

Example

```jsx
className="
flex
items-center
justify-between
p-6
rounded-2xl
bg-white
border
shadow-sm
transition
"
```

---

# 138. State Management Standards

Local state

```
useState
```

Shared state

```
Context
```

No Redux.

No Zustand.

No MobX.

---

# 139. Error Handling

Every async call

```
try

catch
```

Toast on failure.

Never silent failures.

---

# 140. Development Order

Development should strictly follow this order.

---

## Phase 1

Project Setup

```
React

Vite

Tailwind

React Router

Lucide

Folder Structure
```

---

## Phase 2

Layout

```
Sidebar

Navbar

Page Layout

Routing
```

---

## Phase 3

Shared Components

```
Button

Card

Badge

Input

Modal

Toast

Table
```

---

## Phase 4

Authentication

```
Login

Role Routing
```

---

## Phase 5

Farmer Module

```
Dashboard

Animals

Animal Profile

Drug Database

Drug Administration

Consultation
```

---

## Phase 6

Service Layer

```
Storage Service

Animal Service

Drug Service

Consultation Service

Alert Service
```

---

## Phase 7

Seed Data

```
Animals

Drugs

Appointments

Activity
```

---

## Phase 8

Vet Dashboard

---

## Phase 9

Admin Dashboard

---

## Phase 10

Animations

Transitions

Polish

Responsive adjustments (desktop only)

---

# 141. Demo Readiness Checklist

Before the demo, verify the following flow works flawlessly:

✓ Login as Farmer

✓ Dashboard loads with seeded data

✓ Navigate to Animals

✓ Register a new Animal

✓ Navigate to Drugs

✓ Administer a Drug

✓ Withdrawal status updates

✓ Open Animal Profile

✓ Click Attempt Sale

✓ Sale is blocked

✓ Alert banner appears

✓ Activity timeline updates

✓ Dashboard summary changes

✓ Book Consultation

✓ Toast notification appears

---

# 142. Performance Goals

Initial page load

```
< 2 seconds
```

Route changes

```
Instant
```

Animations

```
60 FPS
```

No visible lag.

---

# 143. Definition of Done

The frontend MVP is complete when:

### Architecture

- Folder structure matches the specification.
- Components are reusable.
- Service layer abstracts all data access.
- Seed data initializes correctly.

### UI

- All pages follow the same design language.
- Shared components are used consistently.
- Typography, spacing, and colors are uniform.
- Icons are from Lucide React only.

### Functionality

- Fake login routes correctly.
- CRUD operations work with Local Storage.
- Withdrawal calculation updates the UI.
- Sale blocking logic works.
- Toasts and alerts display appropriately.
- Consultation flow completes successfully.

### UX

- Empty states are handled.
- Loading skeletons are shown.
- Subtle animations enhance interactions.
- Navigation is intuitive and consistent.

### Backend Readiness

- No component accesses `localStorage` directly.
- All interactions occur through service interfaces.
- Swapping Local Storage for Express/Supabase requires only service-layer changes.

---

# 144. Antigravity Development Instructions

This document is the authoritative specification for the project.

Follow it exactly.

### General Rules

- Build **only the frontend**.
- Use **React + Vite + Tailwind CSS**.
- Use **Lucide React** for all icons.
- Use **React Router DOM** for routing.
- Use **Context API** for shared state.
- Use **Local Storage** only through the defined service layer.
- Use **seedData.js** for initial demo content.
- Keep every feature backend-ready.

### Do Not

- Do not add libraries beyond those specified.
- Do not introduce Redux, Zustand, MobX, Material UI, Bootstrap, Chakra UI, Ant Design, or similar frameworks.
- Do not change the folder structure.
- Do not invent additional pages or workflows.
- Do not merge unrelated components.
- Do not bypass the service layer.
- Do not hardcode data inside components.
- Do not use emojis.
- Do not use inline CSS unless absolutely necessary.
- Do not create inconsistent layouts or duplicate UI components.
- Do not implement backend functionality or authentication.

### Build Quality Expectations

The finished product should resemble a polished desktop SaaS application suitable for a national-level hackathon demonstration. The interface should feel cohesive, fast, and production-ready, while remaining simple enough to migrate to a real Node.js + Express + Supabase backend after the hackathon.

---

# 145. Final Vision Statement

AgriSafe is more than a collection of pages—it is a complete frontend architecture designed around a single, compelling story:

1. Register livestock.
2. Record drug administration.
3. Automatically calculate withdrawal periods.
4. Prevent unsafe sales.
5. Promote food safety and regulatory compliance.

Every page, component, service, animation, and interaction should reinforce this narrative. If a first-time judge can understand the problem and the solution within a three-minute demo, the application has achieved its purpose.

---

## END OF PART 6

**END OF SOFTWARE ARCHITECTURE & PRODUCT SPECIFICATION**
````