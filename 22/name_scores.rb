# Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
# containing over five-thousand first names, begin by sorting it into alphabetical
# order. Then working out the alphabetical value for each name, multiply this
# value by its alphabetical position in the list to obtain a name score.

# For example, when the list is sorted into alphabetical order, COLIN, which
# is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN
# would obtain a score of 938 × 53 = 49714.

def total_score(names)
  names.reduce(0) { |sum, name| sum + name_score(name) }
end

def name_score(name)
  score = name.chars.reduce(0) { |sum, char| sum + (char.ord - 64) }
  position = names.index(name) + 1 # Account for the name list starting at 0
  score * position
end

def names(filename = 'names.txt')
  contents = File.read(filename)
  contents.delete('"').upcase.split(",").sort
end

puts total_score(names)
