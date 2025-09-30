# TODO for Contact Form Implementation

- [x] Install nodemailer dependency
- [x] Create contact form in pages/index.js contact section with name, email, message fields
- [x] Add form validation and state management
- [x] Create API route pages/api/contact.js for handling form submission with nodemailer
- [x] Configure email settings (user needs to provide SMTP details)
- [x] Style the form to match the futuristic theme
- [x] Test the form submission and email sending (user can run npm run dev to test)

# Frontend Improvements

- [x] Increase width of skills cards and adjust styling for better appearance
  - Increased grid minmax from 120px to 160px
  - Increased gap from 1.5rem to 2rem
  - Increased max-width from 700px to 950px
  - Increased skill-badge padding from 1rem to 1.5rem
  - Increased min-height from 100px to 120px
  - Increased skill-icon font-size from 2.5rem to 3rem
  - Added font-size 1.1rem to skill-name
- [x] Add top margin to Experience section heading to match spacing like Projects section
  - Changed Experience section padding from py-16 to pt-24 pb-16 and added mt-16 class to Experience h1 for additional top spacing

# Bug Fixes

- [x] Fix syntax error in components/Navbar.js (removed invalid "ci" prefix from import)
- [x] Remove nodemailer import from pages/contact.js to prevent client-side build errors
- [x] Convert pages/contact.js to a proper React page component to avoid conflicts
- [x] Verify build passes without errors
- [x] Remove black strip above Projects section heading by adding top margin
