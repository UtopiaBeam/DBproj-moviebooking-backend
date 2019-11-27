import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Put,
    Delete,
} from '@nestjs/common';
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
    findByUserAndMovie(@Param() { user, movie }): Promise<Review> {
        return this.reviewService.findByUserAndMovie(user, movie);
    }

    @Get('user/:user')
    findByUser(@Param('id') id: number): Promise<Review[]> {
        return this.reviewService.findByUser(id);
    }

    @Get('movie/:name')
    findByMovieName(@Param('name') name: string): Promise<Review[]> {
        return this.reviewService.findByMovieName(name);
    }

    @Post()
    create(@Body() reviewDto: ReviewDto) {
        return this.reviewService.create(reviewDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() reviewDto: Partial<ReviewDto>) {
        return this.reviewService.update(id, reviewDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.reviewService.delete(id);
    }
}
