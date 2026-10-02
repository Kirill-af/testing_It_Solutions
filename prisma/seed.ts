import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    const existing = await prisma.profile.findFirst();
    if(existing){
        return;
}

    await prisma.profile.create({
        data: {
            name: 'Стефанов Кирилл',
            description:
                'Делаю веб-сервисы и аналитику для бизнеса: API, интерфейсы, загрузку данных из Excel в PostgreSQL, дашборды и деплой в Docker.',
            githubUrl: 'https://github.com/Kirill-af',
            linkedinUrl: null,
            skills: {
                create: [
                    { name: 'TypeScript' },
                    { name: 'Node.js' },
                    { name: 'React' },
                    { name: 'Python' },
                    { name: 'PostgreSQL' },
                    { name: 'Docker' },
                    { name: 'Git' },
                    { name: 'REST API' },
                ],
            },
            experience: {
                create: [
                    {
                        company: 'Клевер',
                        position: 'Fullstack-разработчик',
                        startDate: new Date('2025-08-01'),
                        endDate: new Date('2026-09-30'),
                        achievements:
                            'Дашборды продаж и остатков на FastAPI и React, загрузка Excel в PostgreSQL, вход по JWT, деплой в Docker и Nginx. Сайт и лендинги на Next.js. Учёт сделок Cargodesk, CRM промоакций, интеграции с 1С.',
                    },
                ],
            },
            projects: {
                create: [
                    {
                        name: 'CloverDash',
                        url: 'https://cloverdash.ru/',
                    },
                ],
            },
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    }
)
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
)