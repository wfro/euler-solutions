# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?
#
# Factor - number you multiply with something else to produce another number

# So respecting the 'iteration 1' solution, this works, but good god is it
# slow.  This is the kind of stuff I've been interested in exploring, how to
# optimize for problems like this by traversing colletions only as much as you need to.
def largest_prime_factor(n)
  (1..n).select { |i| n % i == 0 && prime?(i) }.max
end

def prime?(n)
  return false if n < 2
  (2..n ** 0.5).each { |i| return false if n % i == 0 }
  return true
end

