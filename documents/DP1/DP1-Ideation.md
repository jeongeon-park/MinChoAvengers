# DP1 - Ideation
Final Team name: <span style="color:#3eb489;">**MinCho Avengers**</span> <br>
Team members: Mina Huh, Juhoon Lee, Hyunchang Oh, Jeongeon Park

-----

## Problem Statement
In online lectures/meetings, being late or losing track of the content **heavily penalizes the listener in comparison to physical lectures/meetings** due to the **increased difficulty in asking for clarification or summarization** from peers, leaving large gaps of information and reducing comprehension going forward.

## Problem Background
Lectures, meetings, and discussions often have pre-made materials (lecture slides, etc.). However, merely reviewing this material to catch up when lost track is not sufficient because i) the lecturer often jumps back and forth or skips some parts instead of linearly moving forward, ii) sometimes information not available in pre-made materials is delivered verbally and via other media (video clips, etc.), iii) reviewing such material should be done quick in order not to further miss upcoming materials. Through a survey with 22 participants on their experience in missing parts of online lectures/meetings, we were able to see that most people have experiences in missing parts of online lectures/meetings, with greater difficulty in catching up than with in-person environments. 95.5% and 54.5% of participants have missed parts of online lectures and meetings, respectively. Some answers stated that online lectures make it more difficult than in-person lectures to ask the instructor or peers for clarification due to greater communication barriers, technical issues, lack of proximity, and large class size. Research also supports that the synchronous nature of online chat is often too fast and chaotic for users to catch up after missing a part [[Fiona, Marianne, and Nichola, 2007](https://uwe-repository.worktribe.com/output/1028645/doing-synchronous-online-focus-groups-with-young-people-methodological-reflections)]. Nevertheless, techniques that tackle this issue in face-to-face communication, or asynchronous online communication cannot be directly applied in synchronous online communication [[Asterhan and Schwarz, 2010](https://www.researchgate.net/publication/220309251_Online_moderation_of_synchronous_e-argumentation)]. Thus, new techniques must be developed for synchronous online chats to aid users that have lost track during communication.

## Motivation
In remote settings, it is especially difficult for participants to ask for clarification or summarization as the social pressure is often against disrupting the flow of the session. Though many automated models for online lecture/meeting summarization already exist ([deepTalk](https://www.deeptalk-ai.com/)), they mostly rely on voice transcription or text recognition and have very limited performance, especially with difficult words, jargons, proper nouns, and accents, which are all prevalent in lectures. Most importantly, they lack the flow and context that is beneficial to content comprehension in a limited time setting. Expert help is also inefficient due to the large responsibility given onto one person and varying quality based on the individual. Social computing is highly suitable for increasing efficiency during real-time lectures where time is crucial. It reduces the individual burden and bolsters summary quality through consistent cross-validation.

-----

## HMW Questions
### Top 3 HMW Questions
* HMW incentivize users to participate in 'summary-crowdsourcing'?
* HMW keep the resultant supplementary material at an adequate level of factual detail?
* HMW ensure that participating in the task does not deter from listening to and understanding the ongoing content?

### How We Chose the HMW Questions
* After individually rating all the HMW questions on a scale of 0-3, those with highest sums (>=5) were picked.
* We then organized them into categories, resulting in following groups - Motivation, Quality, Structure, Communication, User/Prevention/Ease of use.
* Among these criterias, we selected three HMW questions from the following groups after discussing their importance - Motivation, Quality, and User/Prevention/Ease of use.

### Other HMW Questions
* HMW ensure that this summary does not lead to frustrating or follow-up questions?
* HMW prevent malicious trolling or mistakes from decreasing the quality?
* HMW keep the resultant supplementary material in adequate level of detail?
* HMW make people not join late? 
* HMW make the system useful to people who weren't late or even when the class has ended?
* HMW keep the context shared alongside the lectures/meetings?
* HMW keep a similar structure across different lectures?
* HMW incorporate different media (pictures, videos, demos, verbal) into the summaries?
* HMW allow communication between the listeners?
* HMW make the professor/host share the context with latecomers?
* HMW use this for attendance checks or participation scores?
* HMW check and assure the user that they have understood the content, and are okay to move on?
* HMW make sure simultaneously summarizing and listening to lectures is easy?
* HMW incorporate the lecturer into also participating in the system?
* HMW not distract listeners who are willing to give answers/summary?
* HMW make the task quick and simple?
* HMW archive the summaries for each lecture?

-----

## Solution Ideas
### Top 3 Solution Ideas
* Create a **premade structure for the summary** that participants simply fill with content
* Instead of watching the real-time lecture and the previous slides that were missed at the same time, latecomers can **quickly catch up the progress** after **looking at highlights** shown in fast speed
* Lecturers and presenters can **manage questions at a glance** in reference to the lecture summary, and may also **view how well people are following the content**

### How We Chose the Solution Ideas
* After all members rated the HMW questions on a scale of 0-3, the solutions with highest sums were analyzed and discussed.
* We aimed to choose solutions that are not too broad nor not too narrow.
* Feasibility was also taken into account for the selection.

### Other Solution Ideas
#### Solution Ideas to *HMW incentivize users to participate in 'summary-crowdsourcing'?*
* On demand summary - if HELP sign blinks, students answer
* Participation score
* Upvotes/downvotes
* Automatic random assignment 
* Threshold system - Only after participating a certain amount can people see the summary
* Verified/ranking system
* Reputation system - For disputes, people’s votes will be ‘weighted’ by their reputation.
* Compliments/Credit from instructors
* Simplified tasks
* Advertise correlation between participation and higher scores in courses

#### Solution Ideas to *HMW keep the resultant supplementary material at an adequate level of factual detail?*
* Put a character/sentence limit on each point
* Put a time limit on how much each person can contribute
* Paraphrase function
* Length proportional to the amount of contents missed
* Organization manager and moderator
* Discussion boards/communication between users
* Support iterative reviewing - Organize contents in a nested manner that reveal sequentially
* Show who wrote what for accountability (social translucence)
* Build a search system
* Credits for removing incorrect/inappropriate

#### Solution Ideas to *HMW ensure that participating in the task does not deter from understanding the real-time content?*
* Split screen or keep a modal so that students can write the summary while listening to the lecture
* Rewind and changing play speed feature
* Pop-up screen to quickly record the contents professor mentioned in a given time
* Task can be done while the lecturer is not speaking
* Let the person asking the question provide as much context as possible - The person trying to catch up can capture the text/sentence of the moment he came in
* Question system - people can leave comments/questions for clarification
* Use voice recognition and create an auto-generated transcript to make summarization easier

-----

## Storyboards
### Solution 1
> Create a **premade structure for the summary** that participants simply fill with content.
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/Storyboard_1.JPG"/>

### Solution 2
> Instead of watching the real-time lecture and the previous slides that were missed at the same time, latecomers can **quickly catch up the progress** after **looking at highlights** shown in fast speed.
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/Storyboard_2.jpg"/>

### Solution 3
> Lecturers and presenters can **manage questions at a glance** in reference to the lecture summary, and may also **view how well people are following the content**.
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/0.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/0_2.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/1.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/2.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/3.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/4.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/5.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/6.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/7.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/8.JPG"/>
<img src="https://github.com/jeongeon-park/MinChoAvengers/blob/master/documents/DP1/solution3/9.JPG"/>

