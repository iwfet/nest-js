import { IsNotEmpty, Length } from 'class-validator';

export class TeamMemberBody {
  @IsNotEmpty()
  @Length(5,50)
  name: string;

  @IsNotEmpty({message: 'This member function not be empty'})
  function: string;
}
