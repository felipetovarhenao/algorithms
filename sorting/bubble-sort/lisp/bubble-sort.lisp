(defun bubble-sort
  (arr) 
  (let* 
    (
      (size 
        (- 
          (length arr) 1)))
    (loop :for i :from 0 :to size :do 
      (setf stop t)
      (loop :for j :from 0 :to 
        (- size 
          (+ i 1)) :do 
        (progn 
          (setf a 
            (nth j arr)) 
          (setf b 
            (nth 
              (+ j 1) arr))
          (if 
            (> a b) 
            (progn 
              (setf stop nil)
              (setf 
                (nth 
                  (+ j 1) arr) a)
              (setf 
                (nth j arr) b)))))
      (if 
        (eq stop t) 
        (return)))
arr))

(defun main 
  () 
  (print 
    (bubble-sort 
      (list 1 9 2 8 3 7 4 6 5 0))))

(main)
