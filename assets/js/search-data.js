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
        },{id: "nav-journey",
          title: "journey",
          description: "From mechanical engineering to computational neuroscience. The courses, tools and roles along the way.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/journey/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A formal listing of all the things I have done so far!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-python-case-studies",
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
