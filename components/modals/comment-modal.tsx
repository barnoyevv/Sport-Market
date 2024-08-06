import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { addComment } from '@/service/comment.service';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 550,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface KeepMountedModalProps {
  open: boolean;
  handleClose: () => void;
}

const KeepMountedModal: React.FC<KeepMountedModalProps> = ({ open, handleClose, id }) => {

  const handleSubmit = async (values: any) => {
    try {
      localStorage.setItem('comment', JSON.stringify(values.comment));
      const response: any = await addComment(values);
      console.log(response);
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" className='text-[#000]' variant="h4" component="h2" sx={{ mb: 2 }}>
          Добавить комментарий
        </Typography>
        <Formik
          initialValues={{
            comment: ''
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col gap-4'>
              <Field
                as={TextField}
                fullWidth
                label="Комментарий"
                variant="outlined"
                name="comment"
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <ErrorMessage name="comment" component="div" className="text-red-600" />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: '#FBD029',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#FBD029',
                  },
                  height: '40px',
                  borderRadius: '5px',
                  fontSize: '0.875rem',
                }}
              >
                Отправить
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

export default KeepMountedModal;