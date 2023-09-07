import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/data/project.interface';
import { Projects } from 'src/app/data/projects';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit{
  
  projects: Project[] = [];
  
  ngOnInit(): void {
    this.projects = Projects.listProjects;
    
  }


}
