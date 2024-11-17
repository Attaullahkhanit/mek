mek-freq
mek-freq is a lightweight utility library designed to optimize rendering frequency and enhance application performance. It provides efficient implementations of debounce and throttle functions, making it easier to control how frequently functions execute in response to events like typing or scrolling.

Installation
Install the package via npm:
npm install mek-freq  

Features
Debounce: Delays the execution of a function until a specified time has passed since the last event.
Throttle: Ensures a function is executed at most once within a specified time interval.
Usage
Below are examples of how to use debounce and throttle in a React.js application to optimize rendering frequency.

Debounce Function
The debounce function ensures the function is called only after a delay has passed since the last invocation.
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

Throttle Function
The throttle function limits the function execution to once during a specified interval.
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
  
API Reference
Debounce
debounce(func, delay);  
  
func: The function to debounce.
delay: The delay time in milliseconds.
Returns: A new function that executes after the delay following the last invocation.
Throttle
throttle(func, interval);  
  
func: The function to throttle.
interval: The interval time in milliseconds.
Returns: A new function that executes at most once per interval.
Real-World Use Cases
Debounce
Search Bar Input: Prevents triggering an API call for every keystroke, executing the function only after the user stops typing.
Throttle
Scroll Event Listener: Limits the frequency of heavy calculations or re-renders during continuous scrolling events.
License
This project is licensed under the MIT License. For details, see the LICENSE file.

