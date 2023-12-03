export const EventMail = ( firstName, lastName, title, description, location, time, date ) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <title>Your Mental Health Support Event</title>
    </head>
    <body>
        <h2>Dear ${firstName} ${lastName}</h2>
        <p>We are excited to invite you to our upcoming mental health support event. This event aims to provide valuable insights, support, and resources for mental well-being.</p>
        
        <p>Here are the event details:</p>
        <p><strong>Event Title:</strong> ${title}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Time:</strong>${time}</p>
  
        <p>We hope to see you there! Feel free to bring any questions or concerns you may have about mental health.</p>
  
        <p>Best regards,<br>${firstName}</p>
    </body>
    </html>`;
  }
  