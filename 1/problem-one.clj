(defn divis-by-three-or-five?
  [n]
  (or
    (= 0 (mod n 3))
    (= 0 (mod n 5))))

(defn sum-of-multiples
  [n]
  (let [nums (range 1 n)]
    (reduce + (filter divis-by-three-or-five? nums))))

(println (sum-of-multiples 1000))