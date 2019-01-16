# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Comment.destroy_all

50.times do
    created_at = Faker::Date.backward(365)

    p = Post.create(
        title: Faker::Lorem.sentence(5, true, 5),
        body: Faker::Lorem.paragraph(5, true, 5),
        created_at: created_at,
        updated_at: created_at
    )

    if p.valid?
        rand(0..10).times do
            p.comments << Comment.new(
                body: Faker::GreekPhilosophers.quote,
            )
        end
    end
end

posts = Post.all
comments = Comment.all

puts Cowsay.say("Generated #{posts.count} posts", :dragon)
puts Cowsay.say("Generated #{comments.count} comments", :dragon)