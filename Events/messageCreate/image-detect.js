const axios = require('axios')
module.exports = async (message, interaction, client, handler) => {
  const parametersList = ['EXPOSED_ANUS', 'EXPOSED_ARMPITS', 'COVERED_BELLY', 'EXPOSED_BELLY', 'COVERED_BUTTOCKS', 'EXPOSED_BUTTOCKS', 'FACE_F', 'FACE_M', 'COVERED_FEET', 'EXPOSED_FEET', 'COVERED_BREAST_F', 'EXPOSED_BREAST_F', 'COVERED_GENITALIA_F', 'EXPOSED_GENITALIA_F', 'EXPOSED_BREAST_M', 'EXPOSED_GENITALIA_M']
    try {
      // Your event handler code
      if (message.author.bot) return;
  
      if (message.attachments.size > 0) {
        const attachment = message.attachments.first();
  
        if (attachment.contentType.startsWith('image/')) {
          const imageURL = attachment.url;


          const options = {
            method: 'POST',
            url: 'https://nsfw-images-detection-and-classification.p.rapidapi.com/adult-content',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '4b5b89665fmshb1d37ce94074356p1037b8jsna948613faab9',
                'X-RapidAPI-Host': 'nsfw-images-detection-and-classification.p.rapidapi.com'
            },
            data: {
                url: `${imageURL}`
            }
        }


        const response = await axios.request(options)
        const responseData = response.data;

        const hasBannedLabels = responseData.objects.some(obj => parametersList.includes(obj.label))
  
        if (hasBannedLabels) {
          await message.delete();
          message.author.send(`${message.author} the image you sent was deleted as it contained NSFW parameters.`)
        } else {
          message.react('✅')
        }


        console.log(responseData)
        }
      }
    } catch (error) {
      console.error('Error in event handler:', error);
    }
  };