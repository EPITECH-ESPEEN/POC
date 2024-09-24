# ESPEEN Project : Technology Watch Report

> ESPEEN Project is a web application that allows you to manage your tasks.

>Experimentation and comparative analysis of three different stacks and languages in order to choose what best suits the project and the team.

## FRPS stack

>Flask / Jinja / Python / SQL Database

### Advantages

#### MVC Architecture

The FRPS stack benefits from the **Model-View-Controller (MVC) architecture**, which provides a clear separation of concerns. **Flask** handles the backend logic **(Model)**, **Jinja** manages the user interface **(View)**, and the **SQL database** handles data management **(Controller)**. This separation simplifies development and maintenance.

#### Scalability

**Flask** is known for its **flexibility** and **scalability**. Combined with a SQL database, it **supports complex queries** and data relationships, making it suitable for applications of various sizes. **React.js** enhances the **front-end scalability** by efficiently managing UI updates and interactions.

#### Python Ecosystem

**Python’s extensive ecosystem** of **libraries** and **frameworks** enhances development productivity.

#### Strong Typing with SQL

Using a **SQL database** provides **strong typing** and **schema enforcement**, which helps in **maintaining data integrity** and **consistency**. This is particularly useful for applications requiring structured data and complex relationships.

#### Robust Community Support

**Flask**, **Jinja**, and **SQL databases** each have **strong communities** that offer support, resources, and best practices. This active community support helps in solving issues and improving the development process.

#### Flexibility

The **FRPS stack** is **flexible**, allowing developers to choose **specific tools** and **libraries** that best fit their needs. **Flask’s minimalistic nature** means you can add only the components you need, **avoiding unnecessary overhead**.

### Disadvantages

#### Learning Curve

**Flask**, **Python**, and **SQL databases** each come with their own set of concepts and practices. For developers new to these technologies, there can be a steep learning curve, particularly when integrating them effectively.

#### Complexity in Integration

While the FRPS stack offers flexibility, **integrating Flask, Jinja, Python, and a SQL database** can introduce **complexity**. Ensuring smooth communication between these components requires careful configuration and management.

#### SQL Database Management

Managing a **SQL database** involves dealing with **schema design**, **migrations**, and **performance tuning**. For complex applications, this can add to the development effort and require additional expertise.

#### Real-Time Features

**Jinja** is well-suited for building interactive UIs, but implementing **real-time features** like live updates may require **additional libraries or tools**. **Flask**, being a **synchronous framework**, may also **need extra configurations for real-time capabilities**.

#### Server-Side Rendering (SSR) Challenges

While **Flask** can handle **server-side rendering (SSR)**, it may require **additional setup** and **configuration** compared to frameworks designed specifically for SSR. This can add to the development time and complexity.

#### Limited Built-in Features

**Flask** is minimalistic by design, meaning it lacks many built-in features found in more comprehensive frameworks. This requires developers to implement or integrate additional tools for features like authentication, validation, and more.

## MERN STACK

> MongoDB / Express.js / React.js / Node.js

### Advantages

#### MVC

**MERN stack** is great because it has a simple **Model-View-Controller structure**, making it easy for developers to build online programs. Another important thing is that MERN applications are **designed to be shared using micro-services**, where each service works independently and relies on just a few others. This makes MERN ideal for creating reliable programs.

#### Full-Stack

**MERN Stack tools** make it easier for programmers to write programs **quickly** and with **less effort**. By simplifying API calls, developers can focus more on solving problems, adding new features, and improving the product.
With the **MERN stack’s micro-service architecture**, it becomes possible to describe services separately. Each service in the MERN stack handles a single task. This **architectural design** is **excellent** for **programs of any size** and **complexity**, making the MERN stack a **versatile choice** for various applications.

#### Code Maintenance

With the MERN stack, developers can build applications that are easier to handle compared to traditional web applications. **The MERN architecture** has **multiple tiers**, making it **scalable** for both upscaling and downscaling without compromising code integrity. This approach not only saves time but also proves to be a cost-effective solution.

#### Strong Community

The MERN stack is gaining popularity for its ability to combine the front end, back end, and database functionalities. As its popularity grows, a **supportive community** is emerging to assist developers in finding the best solutions.

#### Flexibility

Using the MERN architecture is great because it allows the components of the tech stack to be open source, avoiding license problems. MERN is especially good for applications that need a **clear separation of reliable data and business logic**. It simplifies the code for the front end, back end, and database separately, making things much easier.
 
### Disadvantages

#### Learning Curve

Learning the entire MERN stack can be **challenging for beginners**, especially those who are **new to JavaScript** and web development. Each component of the stack has its own set of concepts and practices, making it a steep learning curve for someone starting from scratch.

#### JavaScript Everywhere

While using a **single language (JavaScript)** for both front-end and back-end development can be seen as an advantage, it can also be a disadvantage. Developers who prefer to use different languages for different parts of the stack may find this limitation frustrating.

#### Scalability Challenges

**MongoDB**, being a NoSQL database, may face challenges with scalability when **dealing with complex relationships between data**. Developers need to **carefully design the schema** and **structure data** to **ensure efficient scaling**.

#### Security Concerns

**Security** is a critical aspect of web development, and improper configurations or coding practices can lead to vulnerabilities. Developers **need to be vigilant** in securing both the front-end and back-end components, and the flexibility of the MERN stack can make it easier to overlook security best practices.

#### Real-Time Features

While Node.js is well-suited for real-time applications, **implementing complex real-time features** may require **additional libraries** or **tools**. Ensuring smooth real-time communication can add complexity to the development process.

#### Vendor Lock-In

Using the MERN stack can lead to a certain degree of vendor lock-in, especially with MongoDB as the database. If there’s a need to switch to a different technology or database, **migrating the entire stack** can be **challenging**.

## Custom stack

> Rust / Vue.js / TypeScript / Directus

### Advantages

#### Modern Front-End

**Vue.js**, combined with **TypeScript**, offers a **modern** and **efficient** approach to building user interfaces. **Vue’s reactive components** and **TypeScript’s type safety** enhance development **speed** and application **reliability**.

#### High Performance

**Rust’s performance** and **safety features** make it an excellent choice for handling server-side operations. Its **low-level control over system resources** and **strong concurrency model** ensure **high performance** and **reliability**.

#### Flexible Data Management

**Directus** provides a **flexible** and **customizable data management** solution. Its headless CMS capabilities and API support make it easy to integrate with various front-end and back-end technologies, streamlining content management.

#### Type Safety

Using **TypeScript** with Vue.js improves **code quality** by catching errors early and providing better tooling support. This leads to more **maintainable** and **scalable codebases**.

#### High Security

**Rust’s emphasis** on **memory safety** and **concurrency** helps in building **secure** and **stable** back-end systems. It **reduces** the risk of **common vulnerabilities** such as buffer overflows and data races.

#### Customizability

The combination of Vue.js, TypeScript, Rust, and Directus allows for a **high degree of customizability**. Developers can tailor the stack to specific project requirements and integrate various tools and libraries as needed.

### Disadvantages

#### Learning Curve

**Each technology** in the stack—Vue.js, TypeScript, Rust, and Directus—comes with its **own learning curve**. Developers need to become proficient in multiple tools and languages, which can be **challenging**.

#### Integration Complexity

Integrating Vue.js with TypeScript, Rust, and Directus may require **additional configuration** and **development effort**. Ensuring seamless communication between these components can introduce **complexity**.

#### Rust Ecosystem

While **Rust** offers performance and safety benefits, its **ecosystem** is **still evolving** compared to more established languages. Finding libraries and tools may require extra effort, and **community support** might be **less extensive**.

#### Directus Configuration

**Directus**, while flexible, may require careful configuration and management to meet specific project needs. Customizing its interface and API to fit the application’s requirements might involve **additional work**.

#### Overhead

The combination of Vue.js, TypeScript, Rust, and Directus introduces various layers and technologies, which can **add overhead to the development process**. Managing and coordinating these different components requires **careful planning**.

#### Deployment

Deploying an application built with this custom stack might involve **additional considerations** and **steps**. Coordinating the deployment of Vue.js, Rust, and Directus components requires a comprehensive strategy to ensure smooth operation.

## To conclude

In the end, we chose the **MERN stack**.

- The **architecture** of the stack allows us to **follow easily the architecture required for the project**, with the **mobile client**, the **web client** and the **application server**.
- **MERN** is a **well-known stack** with a **large community** and **ecosystem**, and allows us to be **scalable** because it uses a single programming language JavaScript (+ TypeScript but based on JavaScript) which **increases team performance**.
- Unlike other stacks, **every team member knows** or **masters** a **technology** from the stack, **while offering a challenge** in project development. This will help to **maintain** the **team's velocity**.
- The team will have **particular attention** to **application security**, as well as **database development**. 
