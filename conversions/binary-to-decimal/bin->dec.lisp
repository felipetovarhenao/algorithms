(defun bin->dec 
  (bin)
  (progn 
    (setf size 
      (length bin))
    (setf sum 0)
    (loop :for x :in bin and i :from 0 :to 
      (- size 1) :do
      (setf sum 
        (+ sum 
          (ash x 
            (- size 
              (+ i 1))))))
sum))

(defun rand-bin 
  (len) 
  (setf rand-state 
    (make-random-state t)) 
  (append 
    (list 1) 
    (loop :for i :from  0 :to (max 1 (- len 2)) :collect 
      (random 2 rand-state)))
)

(defun main 
  () 
  (loop :for i :from 0 :to 9 :do 
    (setf bin 
      (rand-bin 4)) 
    (print 
      (list "bin:" bin "---> dec" 
        (bin->dec bin)))))
  

(main)