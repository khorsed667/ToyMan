

const Blogs = () => {

    const questions = [
        {
            id: 1,
            question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
            answer: 'An access token is a credential that represents the authorization granted to a client application to access protected resources on behalf of a user. It is typically a short-lived token used for authentication and authorization. A refresh token is a long-lived token used to obtain a new access token after the current one expires. They should be securely stored on the client-side, with access tokens typically stored in memory or local storage, and refresh tokens stored in secure HTTP-only cookies or other secure storage mechanisms provided by the platform.',
        },
        {
            id: 2,
            question: 'Compare SQL and NoSQL databases?',
            answer: 'SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems. SQL databases are based on the relational model and use structured schemas, making them suitable for structured data and complex queries. They provide ACID compliance and ensure data consistency and integrity. NoSQL databases offer flexible data models, horizontal scalability, and high availability. They handle diverse data types and are suitable for large-scale data and rapidly changing data requirements.',
        },
        {
            id: 3,
            question: 'What is Express.js? What is Nest.js?',
            answer: 'Express.js is a popular web application framework for Node.js. It provides a minimalist and flexible set of features for building web applications and APIs. Nest.js is a progressive, TypeScript-based web application framework built on top of Express.js. It offers a modular and scalable architecture for building server-side applications, emphasizing code reusability, testability, and maintainability.',
        },
        {
            id: 4,
            question: 'What is MongoDB aggregate and how does it work?',
            answer: 'MongoDB aggregate is a powerful framework for performing data aggregation operations on MongoDB documents. It allows you to process and analyze data from one or more collections, perform transformations, calculations, and grouping operations. The aggregation pipeline is the core concept of MongoDB aggregate, where stages define the sequence of operations applied to the documents. Each stage can filter, project, sort, group, and perform various operations on the data to extract meaningful insights and generate reports.',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Questions and Answers</h1>
            <div className="grid gap-4">
                {questions.map((q) => (
                    <div key={q.id} className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-medium mb-2">{q.question}</h2>
                        <p className="text-gray-700">{q.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;