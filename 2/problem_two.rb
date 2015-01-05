# Each new term in the Fibonacci sequence is generated by adding the previous
# two terms. By starting with 1 and 2, the first 10 terms will be

#   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

# By considering the terms in the Fibonacci sequence whose values do not exceed
# four million, find the sum of the even-valued terms.

def fib(n)
  i = 0
  fib = [1, 2]

  loop do
    break if next_val > n
    fib << fib[i] + fib[i + 1]
    i += 1
  end

  fib
end

def sum_of_even_fibs
  fib_sequence = fib(4000000)
  fib_sequence.reduce(0) do |sum, n|
    n % 2 == 0 ? sum + n : sum
  end
end

puts sum_of_even_fibs
