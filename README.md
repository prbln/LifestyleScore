
# Lifestyle Score 💪🏥📈

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Inspiration 🌟

My project draws inspiration from the reality that medical emergencies can strike anyone, and the hefty healthcare expenses can be overwhelming. It's not uncommon for individuals with fair credit scores to already have home, student, or auto loans, leading to higher interest rates on personal loans for covering unexpected medical costs.

To address this issue, I came up with the ingenious idea of a "lifestyle score." Those who embrace healthy living by engaging in regular physical activity, like daily workouts or cycling, will enjoy lower interest rates on medical emergency loans. This approach not only reflects their potential for quick recovery but also showcases their responsible nature in maintaining a healthy routine. People with lower lifestyle scores won't see any impact on their interest rates. 💪🏥

## What it does 🏃‍♂️📊💰🔍

- The application tracks a user's daily physical activity, utilizing data from various sources such as step counts and calorie tracking. It combines this data with clinical parameters to determine what is considered "active."

- Users are awarded 1 lifestyle score point for each month they consistently live a healthy lifestyle. This encourages sustained positive habits and responsible choices.

- When applying for an instant medical loan, the user's lifestyle score plays a significant role in determining the interest rate. For every lifestyle score point earned through consistent healthy living, the user's interest rate is reduced by 10%, making the loan more affordable and rewarding individuals for maintaining a healthy lifestyle. 💰📉

- For this hackathon, the lifestyle score is based on one type of physical activity: walking.

- Lifestyle score ranges from 0-12, with a perfect score achieved by walking over 10,000 steps on average each month. 🚶‍♂️📊
- Each month with an average step count greater than 10,000 increases the lifestyle score by 1 point. 👣📈

## How we built it 👩‍💻🛠️

The project is built using React for the frontend, with the addition of Material UI for creating a visually appealing user interface. Initially, dummy data was generated using a Python script. For authentication, Auth0 was integrated into the application. Finally, React charts and heatmaps were utilized to plot the step count data.
## Installation

To install and set up your "Lifestyle Score" React project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/lifestylescore.git
cd lifestylescore
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

This will launch the development server, and you can view your project in your web browser by visiting `http://localhost:3000/`.

## Challenges we ran into 😅

One of the main challenges we encountered was integrating with the Google Fit API to retrieve step count data for users. Initially, the idea seemed straightforward, but as we delved into the project, we realized it was more complex than anticipated. Gathering step count data for an entire year could lead to critical performance issues, and caching the data and implementing everything properly would have required significant time and effort.

To overcome this challenge and still create a functioning model for the hackathon, we decided to use dummy data formatted similarly to the Google Fit API data. This approach allowed us to proceed with our project while addressing the data retrieval complexities.

Additionally, we faced deployment issues that we are actively working on resolving. Despite these challenges, we are committed to finding solutions and ensuring the successful implementation of our application.

## Accomplishments that we're proud of 🏆

I made my first-ever hackathon submission, and I'm glad that I didn't give up even when it felt like the project was going nowhere!

## What we learned 🧠

The initial idea sounded easy to implement, but once I got to work, I realized that it would take a significant amount of time to complete. During the process, I learned how to simplify tasks and break them down into smaller, more achievable steps. I also learned how to meet deadlines without severely compromising the core idea.

## What's next for Lifestyle Score 🚀💡

- Firstly, help users connect their health data to the application. 📊💻
- Next, expand the project's scope to include various forms of physical activity, such as sleep tracking, calorie counting, cycling, and running. 🏃‍♀️🚴‍♂️🛏️
- Utilize these additional factors to calculate a more comprehensive and accurate lifestyle score for each individual. 📈🏆

With a visually appealing and user-friendly interface, the Lifestyle Score application can empower individuals to lead healthier lives and make informed healthcare decisions. 🌟🏥


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
