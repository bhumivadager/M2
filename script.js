// News article data
const articleData = {
    title: 'Kashmiris Observe Black Day to Mark India's Illegal Occupation',
    content: 'Kashmiris on both sides of the Line of Control (LoC) and across the world observed Black Day on October 27 to mark India's illegal occupation of Jammu and Kashmir.',
    blackDayExplanation: 'Black Day is observed by Kashmiris every year on October 27 to mark the day when Indian troops landed in Srinagar in 1947.',
    blackDayHistory: 'The day is marked with protests, rallies, and seminars in major cities across the world, including Muzaffarabad, Islamabad, Lahore, and Karachi.',
};

// Display news article
const articleTitle = document.getElementById('article-title');
articleTitle.textContent = articleData.title;

const articleContent = document.getElementById('article-content');
articleContent.textContent = articleData.content;

const blackDayExplanation = document.getElementById('black-day-explanation');
blackDayExplanation.textContent = articleData.blackDayExplanation;

const blackDayHistory = document.getElementById('black-day-history');
blackDayHistory.textContent = articleData.blackDayHistory;
