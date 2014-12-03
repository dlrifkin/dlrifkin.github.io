class Grovel
	def initialize(name,question,*follow_up)
		@name = name
		@question = question.to_s
		@follow_up = follow_up.each {|i| i.to_s}
		@convo = []
	end

	def ask
		puts "Hi #{@name}!"
		sleep 0.5
		query(@question)
	end

	def query(q)
		@convo << q
		puts q
		answer = gets.chomp.to_s
		@convo << answer
		if (/ye|yu/i).match(answer)
			if @follow_up.length > 0
				puts "Thanks!!! Also... "
				sleep 1 
				new_q = @follow_up.shift
				query(new_q)
			else
			puts "Thanks a million #{@name}!"
			end
		else
			puts "Okie doke, thanks anyway #{@name}!"
		end
	end

	def convo
		sleep 0.5
		puts "-------------"
		puts "Printing pathetic groveling..."
		sleep 0.5
		puts "-------------"
		sleep 0.5
		puts @convo
		fname = "#{@name}-reply.txt"
		replyfile = File.open(fname, "w")
		sleep 0.5
		puts "-------------"
		puts "saving to #{fname}"
		replyfile.puts @convo
	end

end

q = "I'm completely rebuilding my .github page. I love the Eastern Moose logo you made a few weeks ago, would you mind if I used it as part of the overall theme?"
c_one = "I realize you're a designer by trade, and not someone's personal helper. Would you like some sort of renumeration for the image's use?"
c_two = "Is there a version I can use that reserves your rights to the image?"

pls_daniella =  Grovel.new("Daniella", q, c_one, c_two)

pls_daniella.ask

pls_daniella.convo

