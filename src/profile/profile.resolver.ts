import {Query, Resolver} from '@nestjs/graphql';
import {ProfileModel} from './profile.models';
import {ProfileService} from './profile.service';

@Resolver()
export class ProfileResolver {
    constructor(private profileService: ProfileService) {}

    @Query(() => ProfileModel, {nullable: true})
    profile() {
        return this.profileService.findProfile();
    }
}