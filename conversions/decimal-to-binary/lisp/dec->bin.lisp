
(defun dec->bin 
	(dec)
	(let*
		(
			(bin 
				(list ))
			(quotient 
				(floor dec 2))
			(remainder 
				(mod dec 2)))
		(if 
			(> quotient 0) 
			(setf bin 
				(append bin 
					(dec->bin quotient))))
		(setf bin 
			(append bin 
				(list remainder)))
bin))


(defun main 
	() 
	(loop :for n :below 10 :do 
		(print 
			(list "decimal:" n "---> binary:"
				(dec->bin n))))
)

(main)
