// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website! 
An "unbiased" source tells me you are going to 
find exactly what you were looking for. ;)
More about me:
'summary' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open('EmployedResume.pdf');
  return 'Opening resume...';
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const danceparty = async (args: string[]): Promise<string> => {
  window.open(`https://www.youtube.com/watch?v=1d9Gebi9Kus`);

  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `LukeFolder
SeemsFolder
LikeFolder
AnFolder
AmazingFolder
CandidateFolder`;
};

export const summary = async (args: string[]): Promise<string> => {
  return `I graduated from the College of Engineering at the University of Alabama with a bachelors degree in Computer Science.
  I have experience in data collection, transformation, and organization for analysis,
  with excellent understanding and proficiency in platforms like Linux and languages such as SQL, Python, and Qlik.
  I am always trying to learn more each and everyday, completing certificates for funsies and
  hopping aboard the Neet/Leetcode train. In my free time, I am developing games and building an interactive website (as you can see lol ).
  So far I've made a zombie survival game in Godot as well as a Monster battle checkers game in Pygame.
  
  oh, and also I'm proficient in Excel... ;)`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, I cannot play any cds as this is a website.
but if you want to change directories, go to a terminal on your computer and type "cd"'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  
  █████                  █████                                                           
  ░░███                  ░░███                                                            
   ░███        █████ ████ ░███ █████  ██████                                              
   ░███       ░░███ ░███  ░███░░███  ███░░███                                             
   ░███        ░███ ░███  ░██████░  ░███████                                              
   ░███      █ ░███ ░███  ░███░░███ ░███░░░                                               
   ███████████ ░░████████ ████ █████░░██████                                              
  ░░░░░░░░░░░   ░░░░░░░░ ░░░░ ░░░░░  ░░░░░░                                               
                                                                                          
                                                                                          
                                                                                          
   ███████████            █████                         █████                        ███  
  ░░███░░░░░███          ░░███                         ░░███                        ░░███ 
   ░███    ░███   ██████  ░███████   ██████  ████████  ███████    █████           ██ ░░███
   ░██████████   ███░░███ ░███░░███ ███░░███░░███░░███░░░███░    ███░░           ░░   ░███
   ░███░░░░░███ ░███ ░███ ░███ ░███░███████  ░███ ░░░   ░███    ░░█████               ░███
   ░███    ░███ ░███ ░███ ░███ ░███░███░░░   ░███       ░███ ███ ░░░░███              ███ 
   █████   █████░░██████  ████████ ░░██████  █████      ░░█████  ██████           ██ ██░  
  ░░░░░   ░░░░░  ░░░░░░  ░░░░░░░░   ░░░░░░  ░░░░░        ░░░░░  ░░░░░░           ░░ ░░░   
                                                                                          
                                                                                          
                                                                                          
Type 'help' to see the list of available commands.
Type 'summary' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
