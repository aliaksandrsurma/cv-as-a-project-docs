---
sidebar_position: 1
---

# Solution Document

:::note
_Different organization may use different templates for 'design' or 'solution document'. Below I'm trying to cover the most popular and useful sections.
Specific sections and documentation approach is a good subject for duscussion on interview._ 
:::

<!-- ```plantuml
@startuml

scale 1.5

skinparam ParticipantBorderColor black
skinparam ParticipantBackgroundColor white
skinparam ArrowColor black
skinparam Shadowing false
skinparam lifeLineStrategy strictuml
skinparam SequenceLifeLineBorderColor grey
skinparam SequenceBoxBorderColor transparent
skinparam sequence {
DividerBackgroundColor white
DividerBorderColor grey
DividerBorderThickness 1
}

title Sequence Diagram (test)
actor Customer

participant storefront as "Storefront" order 1
participant api as "API" order 2
participant db as "DB" order 3

Customer -> storefront: Open "Projects" page
storefront -> api: Get Projects
api -> db: fetch data

@enduml
```


## TBD
## TBD
## TBD -->



## Stakeholders
***

| Name | Role | Notes |
| -------------------- | ----------------------------------| ---------------------------------- |
| Alex Surma | PO | Representing a "business part" and requirements |
| Alex Surma | Solution Architect | Drives a solutioning and technical design |
| Alex Surma | FE and BE Dev Lead | I'm doing dev too ;) |
| Alex Surma | QA Lead | Again me ;) |
| Alex Surma | SRE/DevOps | Have to play this role too |
| N/A | HRs | Users of my public personal 'CV' site |
| N/A | Architects/Directors/Tech leads | People who might interview me, reviewers of current documentation, back-end components, API, source code |


## Definitions, Acronyms, Abbreviations
***

| Term | Description | Reference |
| -------------------- | ----------------------------------| ----------------------------------------------- |
| CV | Curriculum Vitae. A CV is a comprehensive document that outlines a person's education, work experience, skills, achievements, and other relevant information. | |
| C4 model | One of approaches for diagramming and documenting software architectures| [https://c4model.com/](https://c4model.com/) |



## Overview
***
### Context
:::note
This section provides the context for Design / Solution Architect work.
:::
Problem statement:
* me as an **interviewer** always find hard to check 'architect' skills and experience without looking into real deliverables and artifacts. What I usually get is a PDF file and have to prepare questions that should somehow confirm past experience       
* me as an **interviewee** want to better and more efficiently present myself as a professional engineer/architect. Working on large enterprice projects with lot of legacy solutions makes it hard to share outcomes of my work. Want to have something more then plain, boring text in PDF (that can be easily AI generated nowadays). Set of artifacts I can elaborate on, use as a starting points or references during potential white-boarding sessions with my interviewers

![Context Diagram](./images/cv-context.png)
:::info
C4 Model has been used for creating an above diagram. However in real live it doesn't always have to be formal and may depend on the audience/stakeholders
Example - TBD
:::

CV UI and project documentation should have a public access, so it's easy to share and present on interview    
demonstrate design, documentation, tech skills as a set of artifacts rather than text in MS word file/PDF

### Business goals
If I were to define something measurable here I would do this as a 'interview to offer' KPI
e.g. increase 'interview to offer' rate from 10% to 30%

### Quality attributes

Consider to add in this section the following information:
Introduction, context
Quality Goals
Issues and opportunities
SWOT analysis 

Link to Confluence page for Business requirement.

## Dependencies & assumptions
Description with assumptions, constraints and dependencies with others

# Solution Design
High level diagram representation for solution.

If replatforming or significant changes should include both 'as is' and 'to be' sections

Baseline Design/Architecture
Target Design/Architecture

Should include all necessary views  e.g

Logical View
Components
Data View
Infrastructure / Deployment View
[Any other views to be placed here]


May also include ''addressing quality attributes' if applicable e.g 

Addressing Key Quality Attributes

Availability
....
Usability



## API Specification
Link to [SwaggerHub](https://design.api.3stripes.io/home) to the API specification.

## Database schema
Entities represtantion for data model based on [PlantUML](https://plantuml.com/ie-diagram) format.



# Architecture decision records
| Issue | Impact | Status |
| ---------------------- | ---------------------------------- | ----------------------------------- |
| | | |

# Change Log
# References
# Appendix
## Examples