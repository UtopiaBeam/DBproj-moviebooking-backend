import { Controller,Get,Post, Param,Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from './review.entity';
import { ReviewDto } from './review.dto';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Get()
    findAll(): Promise<Review[]> {
        return this.reviewService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Review> {
        return this.reviewService.findById(id);
    }

    @Get('user/:user/movie/:movie')
    findByUserAndMovie(@Param() {user, movie}): Promise<Review> {
        return this.reviewService.findByUserAndMovie(user , movie);
    }

    @Post()
    create(@Body() reviewDto: ReviewDto) {
        return this.reviewService.create(reviewDto);
    }
}