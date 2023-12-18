There are many things that I learned while doing this homework. I first learned how to create a repository, then I learned how to access the repository from my VS code create files make changes to the files and then add commit and push them to github.
I also learned how to pull and update the file I am working on from github. 
[Contribution guidelines for this project](/README.md)


SSH comand line:    ssh -i ~/Documents/'CS 260'/keypair/cs260key.pem ubuntu@54.89.0.41


cheaddarbob.com is the domain that I bought. cheddarbob.com was already purchased


Midterm Review

In the following code, what does the link element do?

-allows authors to link their document to other resources.

In the following code,  what does a div tag do?

- defines a division or a section in an HTML document. The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

In the following code, what is the difference between the #title and .grid selector?

In the following code, what is the difference between padding and margin?

- a margin is the space around an element's border, while padding is the space between an element's border and the element's content. Put another way, the margin property controls the space outside an element, and the padding property controls the space inside an element

Given this HTML and this CSS how will the images be displayed using flex?

What does the following padding CSS do?

-padding: 25px 50px 75px 100px; top right bottom left

What does the following code using arrow syntax function declaration do?

-Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them. They are also always anonymous—there is no way to name an arrow function.

What does the following code using map with an array output?

                        -example: const array1 = [1, 4, 9, 16];
                        
                        // Pass a function to map
                        const map1 = array1.map((x) => x * 2);
                        
                        console.log(map1);
                        // Expected output: Array [2, 8, 18, 32]

What does the following code output using getElementByID and addEventListener?

-listens for a button to be clicked then outputs somthing

What does the following line of Javascript do using a # selector?

Which of the following are true? (mark all that are true about the DOM)

By default, the HTML span element has a default CSS display property value of: 

-display: inline

How would you use CSS to change all the div elements to have a background color of red?

-body {
background-color: #red;
}

How would you display an image with a hyperlink in HTML?

-img class="card-img-top" src= "https://www.themoviedb.org/t/p/original/u5kboZR4OMi4QdbOhawCZuzMVWJ.jpg" alt="barbieposter" height = 600px>

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

-in order from inside to outside: Padding. Border. Margin.

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

-color: green;

What will the following code output when executed using a for loop and console.log?

-outputs to the console

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

-var gfg = document.getElementById("gfg"); 
            gfg.style.color = "green"; 

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

            -<p> </p>, <ul><li></ul>, <ol></ol>

How do you declare the document type to be html?

          -.html, <!DOCTYPE html>

What is valid javascript syntax for if, else, for, while, switch statements?

                              for (statement 1; statement 2; statement 3) , while (condition) {, switch(expression) {
                                case n:
                                  code block
                                  break;
                                case n:
                                  code block
                                  break;
                                default:
                                  default code block
                              }

What is the correct syntax for creating a javascript object?

-const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};


Is is possible to add new properties to javascript objects?
-yes

If you want to include JavaScript on an HTML page, which tag do you use?

-The <script> Tag

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Which of the following correctly describes JSON?

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

-chmod, This command changes the permission information associated with a file. Every file (including directories, which Unix treats as files) on a Unix system is stored with records indicating who has permission to read, write, or execute the file, abbreviated as r, w, and x. These permissions are broken down for three categories of user: first, the owner of the file; second, a group with which both the user and the file may be associated; and third, all other users. These categories are abbreviated as u for owner (or user), g for group, and o for other.

-pwd,  current directory path.

-vim, file editor

-nano, text editor

-mkdir, make directory

-mv, move directory, mv -i oldname newname

-rm, remove

-man, This command displays the manual page for a particular command.

-ssh, 

-ps, The ps command displays information about programs (that is, processes) that are currently running.

- wget,  Wget is a command-line tool that makes it possible to download files and interact with REST APIs. It supports various internet protocols

- sudo, allows you to run programs with the security privileges of another user (by default, as the superuser). It prompts you for your personal password and confirms your request to execute a command by checking a file, called sudoers , which the system administrator configures.

Which of the following console command creates a remote shell session?

Which of the following is true when the -la parameter is specified for the ls console command?

-To see the file permissions, owners, and sizes of all files, enter: ls -la

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

-top level is .com, subdomain is www. root domain is .example.com

Is a web certificate is necessary to use HTTPS.

-yes

Can a DNS A record can point to an IP address or another A record.

-just to an IP adress

Port 443, 80, 22 is reserved for which protocol?

- port 80 is used for HTTP traffic, port 443 is used for HTTPS (HyperText Transfer Protocol Secure) traffic, SSH port 22

What will the following code using Promises output when executed?

-pending - Currently running asynchronously
-fulfilled - Completed successfully
-rejected - Failed to complete


here is the api I am going to use: http://img.omdbapi.com/?apikey=[yourkey]&
here is my key: 5966d1ce

there are many things that I have learned about using API's they can be pretty tricky but also very cool when you finally get it working. I am super happy with how my about page turned out. I love the way that it looks and acts. 


### Final Review

1. What ports are used for HTTP, HTTPS, SSH?
  -HTTP (Hypertext Transfer Protocol):Default port: 80
  - HTTPS (Hypertext Transfer Protocol Secure): Default port: 443
  - SSH (Secure Shell): Default port: 22
    
2. What do HTTP status codes in the 300, 400, 500 range indicate?
   
  - 300 Range (Redirection):300 Multiple Choices: Indicates multiple options for the resource that the client may follow.
   301 Moved Permanently: The requested resource has been permanently moved to a new location, and future requests should use the new URL.
  302 Found (or Moved Temporarily): Similar to 301, but the resource is temporarily located at a different URL. The client should continue to use the original URL.
  303 See Other: The response to the request can be found at another URI using the GET method.
  304 Not Modified: Indicates that the resource has not been modified since the version specified by the request headers, and no data is sent in the response.
  307 Temporary Redirect: Similar to 302, but the request should be repeated with the same method and request headers.

  - 400 Range (Client Errors):400 Bad Request: The server cannot or will not process the request due to a client error (e.g., malformed request syntax, invalid request message framing, or     deceptive request routing).
  401 Unauthorized: Similar to 403 Forbidden, but specifically for cases when authentication is required and has failed or has not been provided.
  403 Forbidden: The client does not have the necessary permissions to access the requested resource.
  404 Not Found: The server cannot find the requested resource.

  - 500 Range (Server Errors):500 Internal Server Error: A generic error message indicating that an unexpected condition was encountered on the server.
  501 Not Implemented: The server does not support the functionality required to fulfill the request.
  502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from an upstream server it accessed in attempting to fulfill the request.
  503 Service Unavailable: The server is not ready to handle the request. Common causes are a server that is down for maintenance or is overloaded.

4. What does the HTTP header content-type allows you to do?
The Content-Type HTTP header field indicates the media type or MIME type of the resource sent in the HTTP message body. It allows the sender to communicate to the recipient what type     of data is being sent and how it should be processed. The Content-Type header is particularly important when dealing with responses, as it helps the recipient understand how to   -       interpret the content.

Here are some common media types specified by the Content-Type header:

- text/html: HTML documents (web pages).
- text/plain: Plain text.
- application/json: JSON (JavaScript Object Notation) data.
- application/xml: XML (eXtensible Markup Language) data.
- image/jpeg, image/png, image/gif: Various image formats.
- audio/mpeg, audio/wav: Audio file formats.
- video/mp4, video/mpeg: Video file formats.

6. What do the following attributes of a cookie do?
- Domain: The Domain attribute specifies the domain for which the cookie is valid. It restricts the cookie to be sent only to the specified domain and its subdomains. For example, if a cookie has a Domain attribute of ".example.com," it will be sent to "subdomain.example.com" as well as "example.com," but not to "otherdomain.com."
- Path:The Path attribute defines the subset of URLs on the domain for which the cookie is valid. It restricts the cookie to be sent only to URLs that match the specified path. For example, if a cookie has a Path attribute of "/subpath," it will only be sent to requests for URLs that start with "/subpath."
- SameSite:The SameSite attribute controls when a cookie is sent with cross-site requests. It helps mitigate the risk of cross-site request forgery attacks. There are three possible values for SameSite:
      - Strict: The cookie is only sent in a first-party context (i.e., the same site as the one the user is visiting).
      - Lax: The cookie is sent in a first-party context and with top-level navigations initiated by GET requests from other sites.
      - None: The cookie is sent with both first-party and cross-site requests. This value requires the Secure attribute to be set as well, meaning it is sent only over HTTPS.
- HTTPOnly:The HttpOnly attribute is a security feature that helps prevent attacks such as cross-site scripting (XSS). When a cookie has the HttpOnly attribute, it cannot be accessed through client-side scripts (e.g., JavaScript). This makes it more difficult for an attacker to steal or manipulate the cookie using malicious scripts.



6. Given the following Express service code: What does the following JavaScript fetch return?

7.Given the following MongoDB query

- { cost: { $gt: 10 }, name: /fran.*/}
- select all of the matching documents.
   -cost is greater than 10 and name matched /fran.*/

8. How should you store user passwords in a database?
    -with a hashing algorithm 

9.Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?

10. What is the WebSocket protocol used for?
    -WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection. It is designed to be implemented in web browsers and web servers but can be used in other contexts as well. The primary purpose of the WebSocket protocol is to enable real-time, bidirectional communication between a client (typically a web browser) and a server.

12. What is JSX and how are the curly braces rendered?
13. Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
      function Welcome(props) {
        return \<h1>Hello, {props.name}\</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);

13. Assuming a HTML document with a 
    <div id="root"></div>
    element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
14. What does the following React component do?
  function Example() {
    // Declare a new state variable, which we'll call "count"  
      const [count, setCount] = useState(0);
      return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

15. What are React Hooks used for?

16. What is the useEffect hook used for?

17. What does this code do?
  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

18. What role does npm play in web development?

19. What does package.json do in a npm project?

20. What does the fetch function do?

21. What does node.js do?

22. What does Vite do?
