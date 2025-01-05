The solution involves using async/await and promises to handle the write operation and implement proper error handling:

```javascript
async function writeDataToFirestore(data) {
  try {
    await db.collection('myCollection').doc('myDoc').set(data);
    console.log('Data written successfully!');
  } catch (error) {
    console.error('Error writing data:', error);
    // Implement exponential backoff retry logic here
  }
}
```
This revised code handles potential errors during the write operation and logs any errors encountered.  To make it even more robust you should add exponential backoff retry logic to deal with transient issues.