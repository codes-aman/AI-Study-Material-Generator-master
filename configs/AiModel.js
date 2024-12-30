const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Create the model
const generationConfig = {
  temperature: 1,
  top_p: 0.95,
  top_k: 40,
  max_output_tokens: 8192,
  response_mime_type: "application/json",
};

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for Exam and level of Difficulty will be easy with summary of course, List of chapters along with the summary for each chapter, Topic list in each chapter in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{"courseSummary": "This course provides an easy introduction to Python programming. It covers fundamental concepts and syntax, making it ideal for beginners preparing for an introductory Python exam.", "chapters": [{"chapterTitle": "Introduction to Python", "chapterSummary": "This chapter introduces the basics of Python, including its history, applications, and how to set up your programming environment.", "topics": ["What is Python?", "Setting up Python environment", "First Python program", "Basic Syntax", "Running Python code"]}, {"chapterTitle": "Variables and Data Types", "chapterSummary": "This chapter covers fundamental data types in Python and how to work with variables.", "topics": ["Variables", "Integers", "Floats", "Strings", "Booleans", "Type Conversion"]}, {"chapterTitle": "Operators", "chapterSummary": "This chapter explores various operators in Python, including arithmetic, comparison, logical, and assignment operators.", "topics": ["Arithmetic Operators", "Comparison Operators", "Logical Operators", "Assignment Operators"]}, {"chapterTitle": "Control Flow", "chapterSummary": "This chapter explains conditional statements and loops in Python.", "topics": ["if-else statements", "for loop", "while loop", "break and continue statements"]}, {"chapterTitle": "Data Structures", "chapterSummary": "This chapter introduces basic data structures such as lists, tuples, and dictionaries.", "topics": ["Lists", "Tuples", "Dictionaries", "Sets"]}, {"chapterTitle": "Functions", "chapterSummary": "This chapter explains how to define and use functions to organize your code.", "topics": ["Defining Functions", "Function Arguments", "Return Values", "Scope"]}, {"chapterTitle": "Input and Output", "chapterSummary": "This chapter demonstrates how to take input from the user and display output.", "topics": ["Taking user input", "Displaying output", "File input and output"]}]}\n\n```',
        },
      ],
    },
  ],
});

export const generateNotesAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail content for each chapter. Make sure to include all topic point in the content, make sure to give content in HTML format (DO not add HTMLKL, Head, Body, title tag), write the content in html tags like <h3> for chapter title <p> for content <h4> for topic, The Chapters:{\n"chapterTitle": "Introduction to Data Structures and Algorithms",\n"chapterSummary": "This chapter introduces the fundamental concepts of data structures and algorithms, their importance in problem-solving, and how to approach algorithm analysis.",\n"topics": [\n"What are Data Structures?",\n"What are Algorithms?",\n"Big O Notation (Introduction)",\n"Common Data Structure Categories"\n]\n},',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "<h3>Introduction to Data Structures and Algorithms</h3>\n<p>This chapter introduces the fundamental concepts of data structures and algorithms, their importance in problem-solving, and how to approach algorithm analysis.</p>\n\n<h4>What are Data Structures?</h4>\n<p>Data structures are specialized ways of organizing and storing data in a computer so that it can be used efficiently.  Different data structures are suited to different kinds of applications and are chosen based on factors such as what operations will be performed most frequently and how much data needs to be stored.  Key aspects include: organization (linear vs. non-linear), access methods, and the trade-offs between storage space and processing time. Examples include arrays, linked lists, stacks, queues, trees, graphs, and hash tables.  Explain the differences between static and dynamic data structures.</p>\n\n<h4>What are Algorithms?</h4>\n<p>An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.  Algorithms are evaluated based on several key properties: correctness (does it produce the right answer?), efficiency (how much time and space does it use?), and readability (how easy is it to understand and maintain?).  Describe different algorithm design paradigms such as brute force, divide and conquer, greedy algorithms, dynamic programming, and backtracking. Provide a simple example of an algorithm (e.g., a search algorithm).</p>\n\n\n<h4>Big O Notation (Introduction)</h4>\n<p>Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.  In computer science, it's used to classify algorithms according to how their run time or space requirements grow as the input size grows.  It describes the upper bound of the growth rate.  Explain the meaning of common Big O notations such as O(1), O(log n), O(n), O(n log n), O(n<sup>2</sup>), O(2<sup>n</sup>), and O(n!). Provide examples of algorithms that exhibit these complexities.  Differentiate between time complexity and space complexity.</p>\n\n<h4>Common Data Structure Categories</h4>\n<p>This section will cover a selection of common data structures, focusing on their properties and use cases.  For each data structure listed, describe its characteristics, operations (insertion, deletion, search, etc.), time and space complexity of those operations, and typical applications.\n<ul>\n    <li><strong>Arrays:</strong> Contiguous memory allocation, efficient access using index.</li>\n    <li><strong>Linked Lists:</strong>  Nodes containing data and pointers to the next node (or previous in doubly linked lists), dynamic size.</li>\n    <li><strong>Stacks:</strong> LIFO (Last-In, First-Out) data structure.</li>\n    <li><strong>Queues:</strong> FIFO (First-In, First-Out) data structure.</li>\n    <li><strong>Trees:</strong> Hierarchical data structure with a root node and branches.  (Briefly mention binary trees, binary search trees).</li>\n    <li><strong>Graphs:</strong>  Nodes and edges representing relationships between data.</li>\n    <li><strong>Hash Tables:</strong>  Using hash functions for efficient key-value lookups.</li>\n</ul>\n  Explain the advantages and disadvantages of each data structure.</p>",
        },
      ],
    },
  ],
});

export const GenerateStudyTypeContentAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate the flashcard on topic: Flutter Fundamentals, User Interface(UI) Development, Basic App Navigation in JSON format with front and back content, Maximum15",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "front": "What is a Widget in Flutter?",\n    "back": "Widgets are the fundamental building blocks of Flutter\'s UI. Everything is a widget! They describe what the UI should look like based on their configuration."\n  },\n  {\n    "front": "Name three common layout widgets.",\n    "back": "1. **Container**: Provides padding, margin, decoration.\\n2. **Row**: Arranges widgets horizontally.\\n3. **Column**: Arranges widgets vertically."\n  },\n   {\n    "front": "What is the purpose of the `Scaffold` widget?",\n    "back": "The `Scaffold` widget provides the basic visual structure for a Material Design app, such as an `AppBar`, `Drawer`, and `BottomNavigationBar`."\n  },\n   {\n    "front": "What are Stateless and Stateful Widgets?",\n     "back": "**Stateless**: UI doesn\'t change after creation.\\n**Stateful**: UI can change based on user interactions or data changes."\n  },\n  {\n    "front": "How do you change the text in a `Text` widget?",\n    "back": "You pass a new `String` value to the `Text` widget\'s `data` property."\n  },\n  {\n    "front": "What widget is used for displaying an image?",\n    "back": "The `Image` widget. You can use `Image.network` for URLs or `Image.asset` for local files."\n  },\n    {\n    "front": "How to handle user input with a text field?",\n    "back": "Use a `TextField` widget. You often pair it with a `TextEditingController` to manage input."\n  },\n  {\n     "front": "What is `AppBar` and where is it located?",\n      "back": "AppBar is a toolbar displayed at the top of the screen. It is usually the child of a `Scaffold`."\n  },\n    {\n     "front": "How is navigation handled in Flutter?",\n     "back": "Primarily through the `Navigator` widget and routes. Use `Navigator.push` to navigate forward and `Navigator.pop` to go back."\n   },\n  {\n    "front": "What is a \'route\' in Flutter navigation?",\n     "back": "A route is a unique string identifier or a widget representing a screen in the app. It is used by the navigator to manage screens."\n  },\n   {\n     "front": "Explain `MaterialPageRoute`.",\n     "back": "It is the common route used for Android/iOS navigation, providing transition animations specific to each platform."\n   },\n  {\n    "front": "What is `Navigator.pushNamed` used for?",\n      "back": "It\'s used to navigate to a route by its name (String identifier) . It requires predefined routes in the `MaterialApp`."\n   },\n    {\n      "front": "What are `named routes`?",\n      "back": "Named routes are a convenient way to organize navigation. You define routes (names) and the corresponding widgets in your app\'s `MaterialApp`."\n    },\n    {\n      "front": "How do you pass data to a new screen?",\n      "back": "Pass data as an argument to the constructor of the new screen (widget) or using `arguments` property in route navigation."\n    },\n     {\n      "front": "What does `Navigator.pop` do?",\n      "back": "It removes the current screen from the navigator\'s stack and navigates back to the previous screen."\n    }\n]\n```\n',
        },
      ],
    },
  ],
});

export const GenerateQuizAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Quiz on topic: Flutter Fundamentals, UserInterface (UI) Development, Basic App Navigation with Question and Options along with correct answer in JSON format. In the questions array give questions in objects with three keys: question, options and answer",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "quizTitle": "Flutter Fundamentals: UI Development & Basic Navigation",\n  "description": "Test your knowledge of Flutter UI concepts and basic app navigation.",\n  "questions": [\n    {\n      "question": "What is the primary purpose of the \'Widget\' in Flutter?",\n      "options": [\n        "To handle network requests.",\n        "To manage application state.",\n        "To describe a part of the user interface.",\n        "To perform database operations."\n      ],\n      "answer": "To describe a part of the user interface."\n    },\n    {\n      "question": "Which widget is commonly used for displaying a sequence of children in a horizontal or vertical layout?",\n      "options": [\n        "Container",\n        "Text",\n        "Row/Column",\n        "Image"\n      ],\n      "answer": "Row/Column"\n    },\n      {\n        "question": "What is the purpose of the \'BuildContext\' in Flutter?",\n        "options": [\n          "To store application preferences.",\n            "To retrieve widget configurations.",\n          "To locate the widget\'s position in the widget tree.",\n            "To manage the lifecycle of widgets."\n        ],\n        "answer": "To locate the widget\'s position in the widget tree."\n      },\n    {\n      "question": "Which widget is used to make a container with specified padding and margin?",\n      "options": [\n        "Center",\n        "Padding",\n          "SafeArea",\n        "Container"\n      ],\n      "answer": "Container"\n    },\n    {\n      "question": "What is the primary role of the \'MaterialApp\' widget in Flutter?",\n      "options": [\n        "To display images.",\n        "To manage network requests.",\n        "To configure the visual theme and overall app structure.",\n        "To handle user input."\n      ],\n      "answer": "To configure the visual theme and overall app structure."\n    },\n      {\n          "question": "Which widget is typically used for navigating between different screens in a Flutter app?",\n          "options": [\n              "Text",\n              "Container",\n              "Navigator",\n              "AlertDialog"\n          ],\n          "answer": "Navigator"\n      },\n      {\n          "question": "What is a \'StatefulWidget\' primarily used for?",\n          "options": [\n              "Displaying static content.",\n              "Managing immutable data.",\n              "Managing a dynamic state that can change over time.",\n              "Rendering simple layouts."\n\n          ],\n        "answer": "Managing a dynamic state that can change over time."\n      },\n    {\n      "question": "How do you typically pass data between screens when using the Navigator?",\n      "options": [\n        "Using global variables.",\n        "Using shared preferences.",\n          "Using arguments in the Navigator.push named route",\n        "Using local storage."\n      ],\n        "answer": "Using arguments in the Navigator.push named route"\n    },\n      {\n          "question": "What is the purpose of the \'pubspec.yaml\' file in a Flutter project?",\n          "options": [\n              "To store user preferences.",\n              "To define the project\'s dependencies and assets.",\n              "To define the project\'s layout structure.",\n              "To store the application\'s business logic."\n\n          ],\n          "answer": "To define the project\'s dependencies and assets."\n      },\n    {\n      "question": "Which widget is used to create a button that can be interacted with?",\n      "options": [\n        "Text",\n        "Row",\n        "Container",\n        "ElevatedButton"\n      ],\n      "answer": "ElevatedButton"\n    }\n\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

// const result = await.send_message("INSERT_INPUT_HERE");
