mek-freq
mek-freq is a lightweight utility library designed to optimize rendering frequency and improve application performance. It provides implementations for debounce and throttle functions, helping control how frequently functions execute in response to events.

Installation
Install the mek-freq package via npm: npm install mek-freq

Features
Debounce: Ensures that a function is executed only after a specified delay following the last event.
Throttle: Guarantees that a function is executed at most once within a specified time frame.
Usage
Below are examples of how to use debounce and throttle in a React.js application to optimize rendering frequency.

Debounce Function
The debounce function delays the execution of a function until a specified delay has passed since the last time it was invoked.

javascript code:
import { debounce } from 'mek-freq';

function App() {
  const handleInputChange = debounce((event) => {
    console.log('Input value:', event.target.value);
  }, 300);

  return (
    <div>
      <h1>Debounce Example</h1>
      <input type="text" placeholder="Type something..." onChange={handleInputChange} />
    </div>
  );
}

export default App;


Throttle Function
The throttle function ensures that a function is executed at most once during a specified interval.

javascript code:
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
      <div style={{ height: '1500px', background: '#f0f0f0' }}>Scroll down to test throttle</div>
    </div>
  );
}

export default App;

API
Debounce
javascript code:
debounce(func, delay)
func: The function to debounce.
delay: The delay time in milliseconds.
Returns: A new function that delays the execution of func until after the delay has elapsed since the last invocation.

Throttle
javascript code:
throttle(func, interval)
func: The function to throttle.
interval: The interval time in milliseconds.
Returns: A new function that limits the execution of func to at most once per interval.

Examples in Real-World Scenarios
Debounce
Search Bar Input: Prevents triggering an API call for every keystroke, executing the function only after the user stops typing.
Throttle
Scroll Event Listener: Limits the frequency of a heavy calculation or re-render during continuous scrolling events.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to reach out for issues or feature requests at the mek-freq GitHub Repository.
