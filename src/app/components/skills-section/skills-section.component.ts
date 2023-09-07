import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {

  listLangFram = [
    {
      lenFram : '../../../assets/icons/html.svg'
    },
    {
      lenFram : '../../../assets/icons/css.svg'
    },
    {
      lenFram : '../../../assets/icons/javascript.svg'
    },
    {
      lenFram : '../../../assets/icons/java.svg'
    },
    {
      lenFram : '../../../assets/icons/typescript.svg'
    },
    {
      lenFram : '../../../assets/icons/angular.svg'
    },
    {
      lenFram : '../../../assets/icons/spring-boot.svg'
    },
  ];

  listTecTools = [
    {
      tecTools: '../../../assets/icons/figma.svg'
    },
    {
      tecTools: '../../../assets/icons/git.svg'
    },
    {
      tecTools: '../../../assets/icons/logo-github.svg'
    },
    {
      tecTools: '../../../assets/icons/postman-api.svg'
    },
  ];

  listSkillsSoft = [
    {
      content: 'Trabajo en equipo'
    },
    {
      content: 'Responable'
    },
    {
      content: 'Creativo'
    },
    {
      content: 'Colaborador'
    },
    {
      content: 'Interesado en aprender nuevos temas'
    },
  ]

}
