# A palindromic number reads the same both ways. The largest palindrome made
# from the product of two 2-digit numbers is 9009 = 91 × 99.
#
# Find the largest palindrome made from the product of two 3-digit numbers.


def largest_palindrome(n)
  start = ('1' + '0' * (n - 1)).to_i
  _end = (start.to_s + '0').to_i
  (start.._end).reduce(0) do |largest_pal, num|
    # we're always going to multiply 10 x 10, 11 x 11
  end
end

def palindrome?(n)
  n.to_s.reverse == n.to_s
end

# def assign_largest_pal(max, current_result)
#   if current_result > max
#     current_result
#   else
#     largest_pal
#   end
# end

puts largest_palindrome(2)
