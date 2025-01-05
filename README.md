# Intermittent Firestore Write Failures

This repository demonstrates a bug encountered with Firebase Firestore where write operations would intermittently fail without providing any error messages to the client-side code.  The problem was particularly challenging to diagnose because of the inconsistent nature of the failures.

The `firestoreBug.js` file contains the problematic code. `firestoreBugSolution.js` demonstrates the corrected implementation.

## Problem

The initial code used a simple `set()` operation to write data to Firestore.  The problem was there was no proper error handling, making it impossible to detect when a write operation failed.  This resulted in data loss and unpredictable behavior.

## Solution

The solution involved adding robust error handling to the write operation using the `.catch()` method of the promise returned by `set()`.  This allows the application to handle failures gracefully and provide the user with feedback.  Additionally, implementing exponential backoff retry logic helps deal with temporary network issues or server-side limitations.