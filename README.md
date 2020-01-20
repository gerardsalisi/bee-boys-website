# Summary

This repo contains the website for the **Bee Boys'** FYDP project. It contains basic information about the project for non-technical readers and also as a blog to track the team's progress.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Deployment

Integration with GitHub Pages was made possible using [react-gh-pages](https://github.com/gitname/react-gh-pages).

To deploy your changes run:

### `npm run deploy`

**Hard refresh the page if your changes do not show after running the command above**

# How to Create a New Blog Post

1. Go to 

### `src/blogs/summary.json`

2. Add a new summary for the blog post to the file with the same structure as below, 

``` 
 {
        "title": "Back to School",
        "date": "01/12/20",
        "source": "01-12-20.md"
 },
```

3. Create a new markdown file with the same filename as you wrote in the summary.json file. 

4. Type up the blog in the markdown file; here is a [markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you are not familiar with markdowns.

5. Run an `npm run deploy` to deploy your changes.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
