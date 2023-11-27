import { LoadingButton } from '@mui/lab';
import { DialogActions, DialogContent, DialogTitle, FormControl, Grid, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import { orderService } from 'services';

type PopupProps = PopupController & {
  item: TravelRecordType;
};

const PopupCreateOrder = ({ onClose, item }: PopupProps) => {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: orderService.createOrder,
    onSuccess: () => {
      enqueueSnackbar('Đặt đơn thành công', { variant: 'success' });
      onClose();
    },
  });

  const handleClickSubmit = () => {
    handleSubmit((values) => {
      createOrder({
        ...values,
        travelId: item.id,
      } as OrderPayloadType);
    })();
  };

  return (
    <>
      <DialogTitle>Đặt tour</DialogTitle>

      <DialogContent>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <FormControl fullWidth>
              <label className='mb-3 text-xs font-medium text-secondary-light'>Tên tour</label>
              <Controller
                name='travelId'
                defaultValue=''
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    value={item.name}
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                )}
              />
            </FormControl>
          </Grid>

          <Grid item sm={12}>
            <FormControl fullWidth>
              <label className='mb-3 text-xs font-medium text-secondary-light'>Tên của bạn</label>
              <Controller
                name='name'
                defaultValue=''
                rules={{
                  required: 'Tên không được để trống',
                }}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField {...field} fullWidth error={!!error} helperText={error?.message} />
                )}
              />
            </FormControl>
          </Grid>

          <Grid item sm={12}>
            <FormControl fullWidth>
              <label className='mb-3 text-xs font-medium text-secondary-light'>Email</label>
              <Controller
                name='email'
                defaultValue=''
                rules={{
                  required: 'Email không được để trống',
                }}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField {...field} fullWidth error={!!error} helperText={error?.message} />
                )}
              />
            </FormControl>
          </Grid>

          <Grid item sm={12}>
            <FormControl fullWidth>
              <label className='mb-3 text-xs font-medium text-secondary-light'>Tiêu đề</label>
              <Controller
                name='title'
                defaultValue=''
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField {...field} fullWidth error={!!error} helperText={error?.message} />
                )}
              />
            </FormControl>
          </Grid>

          <Grid item sm={12}>
            <FormControl fullWidth>
              <label className='mb-3 text-xs font-medium text-secondary-light'>Nội dung</label>
              <Controller
                name='description'
                defaultValue=''
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField {...field} multiline minRows={3} fullWidth error={!!error} helperText={error?.message} />
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <LoadingButton variant='outlined' color='inherit' onClick={onClose}>
          Hủy
        </LoadingButton>
        <LoadingButton variant='contained' color='info' loading={isPending} onClick={handleClickSubmit}>
          Tạo
        </LoadingButton>
      </DialogActions>
    </>
  );
};

export default PopupCreateOrder;
