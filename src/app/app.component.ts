import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-app';
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number | "" = "";
  teams: string[][] = []

  onInput(member: string) {
    this.newMemberName = member;
  }
  onNumberOfTeamInput(team: string) {
    this.numberOfTeams = Number(team)
  }
  
  addMember() {

    if(!this.newMemberName) {
      this.errorMessage = "Name cannot be empty"
      return
    }

    this.errorMessage = ""
    this.members.push(this.newMemberName)
    this.newMemberName = ""
  }

  generateTeams() {

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid input"
      return
    }

    if(this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not Enough members"
      return
    }

    const allMembers = [...this.members]

    while(allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0]
        if(!member)break
        if (this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      } 
    }
    console.log(this.teams)
    this.members = []
    this.numberOfTeams = ""
  }

  newGroup() {
    this.teams = []
  }

}
