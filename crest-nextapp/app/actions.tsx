'use server'

import { createStreamableValue } from 'ai/rsc'
import { CoreMessage, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'



export async function continueConversation(messages: CoreMessage[]) {
  try {
    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      messages
    });
    const stream = createStreamableValue(result.textStream);
    return stream.value;
  } catch (error) {
    console.error("Error during conversation continuation:", error);
    
    // Optionally, include more sophisticated error handling here
    throw new Error("Failed to continue conversation.");
  }
}


// export async function continueConversation(messages: CoreMessage[]) {
//   const result = await streamText({
//     model: openai('gpt-3.5-turbo'),
//     messages
//   })

//   const stream = createStreamableValue(result.textStream)
//   return stream.value
// }




