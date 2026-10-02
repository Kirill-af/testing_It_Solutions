import {Injectable} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    findProfile() {
        return this.prisma.profile.findFirst({
            include: {
                skills:true,
                experience: true,
                projects: true,
            },
        });
    }
}