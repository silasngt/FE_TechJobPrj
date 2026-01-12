'use client';
import { registerPlugin, FilePond } from 'react-filepond';
import JustValidate from 'just-validate';
import { useEffect, useRef, useState } from 'react';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { toast, Toaster } from 'sonner';
import { workingFormList } from '@/src/config/workingForm';
import { positionList } from '@/src/config/position';
import { title } from 'process';
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);
export const FormEdit = (props: { id: string }) => {
  const { id } = props;
  const editorRef = useRef<any>(null);
  const [isValid, setIsValid] = useState(false);
  const [images, setImages] = useState<any>([]);
  const [jobDetail, setJobDetail] = useState<any>();
  registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);
  // Lấy ra chi tiết công việc
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`, {
      method: 'GET',
      credentials: 'include', // Gửi kèm cookie
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          setJobDetail(res.data.job);
        }
        if (res.success === false) {
          toast.error(res.message);
        }
      });
  });

  // Xử lý validate form
  useEffect(() => {
    if (jobDetail) {
      if (jobDetail.images && jobDetail.images.length > 0) {
        const listImage = jobDetail.images.map((image: string) => {
          return { source: image };
        });
        setImages(listImage);
      }
      const validator = new JustValidate('#formEditJob');

      validator
        .addField('#title', [
          {
            rule: 'required',
            errorMessage: 'Vui lòng nhập tên công việc!',
          },
        ])
        .addField('#salaryMin', [
          {
            rule: 'minNumber',
            value: 0,
            errorMessage: 'Vui lòng nhập mức lương >= 0',
          },
        ])
        .addField('#salaryMax', [
          {
            rule: 'minNumber',
            value: 0,
            errorMessage: 'Vui lòng nhập mức lương >= 0',
          },
        ])
        .onFail(() => {
          setIsValid(false);
        })
        .onSuccess(() => {
          setIsValid(true);
        });
    }
  }, [jobDetail]);
  // Xử lý submit form
  const handleSubmit = (event: any) => {
    if (isValid) {
      const title = event.target.title.value;
      const salaryMin = event.target.salaryMin.value;
      const salaryMax = event.target.salaryMax.value;
      const position = event.target.position.value;
      const workingForm = event.target.workingForm.value;
      const technologies = event.target.technologies.value;
      let description = event.target.description.value;

      // Tạo FormData
      const formData = new FormData();
      formData.append('title', title);
      formData.append('salaryMin', salaryMin);
      formData.append('salaryMax', salaryMax);
      formData.append('position', position);
      formData.append('workingForm', workingForm);
      formData.append('technologies', technologies);
      formData.append('description', description);

      // images
      if (images.length > 0) {
        for (const image of images) {
          if (image.file) {
            formData.append('images', image.file);
          }
        }
      }
      // End images

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`, {
        method: 'PATCH',
        body: formData,
        credentials: 'include', // Gửi kèm cookie
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success === false) {
            toast.error(res.message);
          }

          if (res.success === true) {
            toast.success(res.message);
          }
        });
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      {jobDetail && (
        <form
          id="formEditJob"
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 space-y-6"
        >
          {/* Title */}
          <div>
            <label className="text-xs font-medium text-gray-700">
              Tiêu đề công việc
            </label>
            <input
              name="title"
              id="title"
              type="text"
              defaultValue={jobDetail?.title}
              className="h-10 mt-1 w-full px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Salary + Position */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Lương tối thiểu
              </label>
              <input
                name="salaryMin"
                id="salaryMin"
                type="text"
                defaultValue={jobDetail?.salaryMin}
                placeholder="VD: 1000$"
                className="h-10 px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Lương tối đa
              </label>
              <input
                name="salaryMax"
                id="salaryMax"
                type="text"
                defaultValue={jobDetail?.salaryMax}
                placeholder="VD: 2000$"
                className="h-10 px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Vị trí
              </label>
              <select
                name="position"
                id="position"
                defaultValue={jobDetail?.position}
                className="h-10 px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">-- Chọn cấp bậc --</option>
                {positionList.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Working form + technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Hình thức làm việc
              </label>
              <select
                name="workingForm"
                defaultValue={jobDetail.workingForm}
                className="h-10 px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">-- Chọn hình thức làm việc --</option>
                {workingFormList.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">
                Công nghệ yêu cầu
              </label>
              <input
                name="technologies"
                defaultValue={
                  jobDetail?.technologies?.length > 0
                    ? jobDetail.technologies.join(', ')
                    : ''
                }
                placeholder="VD: ReactJS, Node.js, Laravel..."
                className="h-10 px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              />
              <p className="text-[11px] text-gray-400">
                Nhập nhiều công nghệ cách nhau bằng dấu phẩy
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-700">
              Mô tả công việc
            </label>
            <textarea
              rows={6}
              name="description"
              placeholder="Nhập mô tả chi tiết công việc..."
              defaultValue={jobDetail?.description}
              className="px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 resize-y"
            />
          </div>

          {/*  Upload file */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-700">
              Hình ảnh mô tả (tuỳ chọn)
            </label>
            <FilePond
              name="images"
              allowMultiple={true} //Chỉ chọn nhiều ảnh
              allowRemove={true} //Cho phép xóa ảnh
              labelIdle="+"
              acceptedFileTypes={['image/*']}
              files={images}
              onupdatefiles={setImages}
              maxFiles={8}
            />
            <p className="text-[11px] text-gray-400">
              Có thể chọn nhiều ảnh tối đa 8 ảnh
            </p>
          </div>

          {/* Submit actions */}
          <div className="flex justify-end gap-3 pt-4">
            <a
              href="/company/jobs"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50 transition"
            >
              Huỷ
            </a>
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-500 text-white font-semibold text-sm rounded-md hover:bg-emerald-600 transition"
            >
              Cập nhật tin tuyển dụng
            </button>
          </div>
        </form>
      )}
    </>
  );
};
