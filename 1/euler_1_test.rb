# https://projecteuler.net/problem=1
#
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we
# get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.

gem 'minitest', '~>5.4.2'
require 'minitest/autorun'
require 'minitest/pride' # pretty colors

class ProblemOneTest < Minitest::Test
  def test_it_computes_the_right_sum
    assert_equal 23, sum_of_multiples(10)
  end

  def test_it_computes_the_right_sum_with_reduce
    assert_equal 23, sum_of_multiples_reduce(10)
  end
end

# This example is classic imperative programming, using the simpler
# looping construct #each (in languages like C you'd use a for loop)
# to build up a variable's value which we then return from the function.
# Ruby has some more complex methods in its Enumerable module that use
# functional programming concepts.  Enumerable#reduce is an elegant
# solution to this problem, which 'reduces' a collection like an array
# into a single value.
def sum_of_multiples(up_to)
  nums = (3...up_to).to_a # the upper number is exlcusive
  total = 0

  nums.each do |num|
    if num % 3 == 0 || num % 5 == 0
      total += num
    end
  end

  total
end

# Here is an example using reduce as mentioned above
def sum_of_multiples_reduce(up_to)
  nums = (3...up_to).to_a
  nums.reduce(0) do |sum, num|
    if num % 3 == 0 || num % 5 == 0
      sum + num
    else
      sum
    end
  end
end


