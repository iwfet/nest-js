import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamMemberBody } from './dtos/team-member-body';
import { MemberRepository } from './repository/member-repository';

@Controller()
export class AppController {
  constructor(private memberRepository: MemberRepository) {}

  @Post('create')
  async PostCreate(@Body() body: TeamMemberBody) {
    const { name, function: memberFunction } = body;
    await this.memberRepository.create(name, memberFunction);
  }
}
