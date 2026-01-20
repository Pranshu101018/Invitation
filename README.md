# Graduation Invitation Card

A beautiful, interactive React graduation invitation that you can customize and send to your guests.

## Features

- ✨ Elegant graduation invitation design
- 🔄 Interactive flip card animation
- 📝 Customizable guest names and details
- 📱 Fully responsive design
- 🎨 Modern gradient styling
- 🖨️ Print-friendly

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Customization

To customize the invitation with your own details, edit the `inviteData` object in [src/GraduationInvite.jsx](src/GraduationInvite.jsx):

```jsx
const inviteData = {
  graduateName: 'Sarah Johnson',           // Graduate's name
  graduateRole: 'Bachelor of Science...',  // Degree/field
  date: 'Saturday, the 23rd of May',      // Ceremony date
  time: '10:30 AM',                        // Ceremony time
  venue: 'University of Excellence',       // Venue name
  address: '123 Academic Drive...',        // Full address
  ceremony: 'Graduation Ceremony',         // Event name
  reception: 'Reception to follow',        // Reception info
  rsvpDeadline: 'May 15, 2026',           // RSVP deadline
  contact: '(555) 123-4567 | graduation@email.com', // Contact info
}
```

## Features to Use

### Flip Animation
- Click anywhere on the invitation card to flip between front and back
- Front side: Main invitation details
- Back side: RSVP information and personalized greeting

### Personalization
- Use the customization panel below the card to enter guest names
- The guest name will appear on the back of the invitation

### Styling
- All colors and fonts can be customized in [src/GraduationInvite.css](src/GraduationInvite.css)
- The design uses a modern gradient theme (purple to pink)

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to be deployed.

## Deployment Options

You can deploy the built graduation invitation to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push to a repository and enable Pages
- **Print**: Use print functionality for physical invitations

## How to Share

1. **Digital**: Deploy to a hosting service and send the URL to guests
2. **Email**: Send screenshots of the invitation
3. **Print**: Print the invitation using browser print (Ctrl+P / Cmd+P)
4. **Social**: Share screenshots on social media

## Tips for Best Results

- Customize all the event details before sharing
- Test the flip animation to ensure all information is visible
- Use the print function to preview how the invitation looks on paper
- Consider the time zone if guests are from different regions

## Technologies Used

- React 18
- Vite
- CSS3 (with animations and transforms)

## License

Feel free to modify and use this invitation template for your graduation ceremony!

---

**Made with ❤️ for your special day!**
