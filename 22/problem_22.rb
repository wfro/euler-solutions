# Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
# containing over five-thousand first names, begin by sorting it into alphabetical
# order. Then working out the alphabetical value for each name, multiply this
# value by its alphabetical position in the list to obtain a name score.

# For example, when the list is sorted into alphabetical order, COLIN, which
# is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN
# would obtain a score of 938 × 53 = 49714.

# What is the total of all the name scores in the file?

# DONE - Sort names.txt into alphabetical order
# Score: multiply alphabetical value for each name by its position in the list
# Find: alphabetical value for a single word
# Find: a words position in the list

def name_score(name)
  name_scores = name.chars.reduce(0) { |sum, char| sum + alphabetical_values[char] }
  position = names.index(name) + 1 # Account for the name list starting at 0
  name_scores * position
end

def total_score(names)
  names.reduce(0) { |sum, name| sum + name_score(name) }
end

def alphabetical_values
  h = {}
  ('a'..'z').each_with_index do |char, i|
    h[char] = i + 1
  end
  h
end

# Giant array of names in alphabetical order
def names(filename = 'names.txt')
  contents = File.read(filename)
  contents.delete('"').downcase.split(",").sort
end

puts total_score(names)
