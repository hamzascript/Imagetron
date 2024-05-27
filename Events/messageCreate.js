module.exports = (message, client) => {
    try {
      // Your event handler code
      if (message.author.bot) return;
  
      if (message.attachments.size > 0) {
        const attachment = message.attachments.first();
  
        if (attachment.contentType.startsWith('image/')) {
          const imageURL = attachment.url;
          console.log(`Image URL: ${imageURL}`);
        }
      }
    } catch (error) {
      console.error('Error in event handler:', error);
    }
  };