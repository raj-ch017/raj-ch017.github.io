// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of my cool projects. The more I learn, the more this list grows.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-portfolio",
          title: "portfolio",
          description: "A collection of my learning portfolio",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/certifications-3.gitbook.io/rajdeeps-portfolio";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This page contains my latest curriculum vitae. You can take a look by scrolling through this page, or download a copy by clicking on the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-python-case-studies",
          title: 'Python Case Studies',
          description: "Application of Python in Research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/python_case_studies/";
            },},{id: "projects-task-fmri-analysis",
          title: 'Task-fMRI Analysis',
          description: "Predicting Personality Traits from Cognitive Task Performance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/task_fmri/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
