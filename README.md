mek-freq
mek-freq is a lightweight utility library that helps optimize the frequency of function executions, enhancing application performance. It provides efficient implementations for debounce and throttle functions, making it easier to handle events like typing, scrolling, or other repetitive user interactions without degrading performance.

Installation
You can install the package via npm: npm install mek-freq
Features
Debounce: Delays the execution of a function until a specified amount of time has passed since the last event. Useful for scenarios like preventing an API call on every keystroke in a search input.

Throttle: Limits the execution of a function to at most once within a specified time interval. Ideal for scenarios like reducing the frequency of scroll or resize event listeners.

Usage Examples
Here are some examples of how to use debounce and throttle in a React.js application:

Debounce Function
The debounce function delays the execution of a function until after a specified delay has passed since the last time it was called.

```javascript
import { debounce } from 'mek-freq';

function App() {
  const handleInputChange = debounce((event) => {
    console.log('Input value:', event.target.value);
  }, 300);

  return (
    <div>
      <h1>Debounce Example</h1>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default App;

Explanation:

The handleInputChange function is debounced by 300 milliseconds.
The function will only execute if the user stops typing for 300ms, avoiding unnecessary frequent API calls.
Throttle Function
The throttle function ensures a function is executed at most once during a specified time interval.


import { throttle } from 'mek-freq';

function App() {
  const handleScroll = throttle(() => {
    console.log('Scroll event triggered');
  }, 500);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <h1>Throttle Example</h1>
      <div style={{ height: '1500px', background: '#f0f0f0' }}>
        Scroll down to test throttle
      </div>
    </div>
  );
}

export default App;
Explanation:

The handleScroll function is throttled to execute at most once every 500 milliseconds.
This reduces the number of times the scroll handler is invoked during continuous scrolling, preventing performance bottlenecks.
API Reference
Debounce
javascript
Copy code
debounce(func, delay)
Parameters:
func: The function to debounce.
delay: The delay time in milliseconds.
Returns: A new debounced function that executes func only after the specified delay since the last invocation.
Throttle
javascript
Copy code
throttle(func, interval)
Parameters:
func: The function to throttle.
interval: The interval time in milliseconds.
Returns: A new throttled function that executes func at most once per interval.
Real-World Use Cases
Debounce
Search Bar Input: When a user types in a search bar, debounce can delay triggering the search API call until the user pauses typing. This reduces redundant API calls and optimizes performance.
Throttle
Scroll Event Listener: Throttle can limit the frequency of executions for scroll-related calculations or re-renders, improving performance during continuous scrolling.
License
This project is licensed under the MIT License. For details, see the LICENSE file.